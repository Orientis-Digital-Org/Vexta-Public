import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import BentoCard from '../components/ui/BentoCard';
import StatusBadge from '../components/ui/StatusBadge';
import CopyPill from '../components/ui/CopyPill';
import SectionHeader from '../components/ui/SectionHeader';

export default function DownloadsPage() {
  const {
    clientDownloads,
    olderDownloads,
    availableVersions,
    selectedVersion,
    selectReleaseByVersion,
    latestClientVersion,
    latestClientBuild,
    loading,
    downloadApiBaseUrl,
  } = useApp();

  const [verifyHashInput, setVerifyHashInput] = useState('');
  const [showArchive, setShowArchive] = useState(false);
  const [showVerifier, setShowVerifier] = useState(false);

  // Categorize specific release artifacts
  const winSetup = clientDownloads.find(
    (d) => d.key === 'windows_nsis' || d.filename?.endsWith('-setup.exe') || (d.platform_key === 'windows' && d.filename?.endsWith('.exe') && !d.filename?.toLowerCase().includes('portable'))
  );
  const winPortable = clientDownloads.find(
    (d) => d.key === 'windows_portable' || d.filename?.toLowerCase().includes('portable') || d.filename?.endsWith('.zip')
  );
  const winMsi = clientDownloads.find(
    (d) => d.key === 'windows_msi' || d.filename?.endsWith('.msi')
  );

  const latestAppImage = clientDownloads.find((d) => d.platform_key === 'linux' && d.filename?.endsWith('.AppImage'));
  const latestDeb = clientDownloads.find((d) => d.platform_key === 'linux' && d.filename?.endsWith('.deb'));
  const latestApk = clientDownloads.find(
    (d) => d.platform_key === 'android' || d.key === 'android_apk' || d.filename?.endsWith('.apk')
  );

  const triggerDownload = (dl) => {
    if (!dl) return;
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#39ff14', '#22c55e', '#4ade80'],
      });
    } catch {}

    const isApk = dl.platform_key === 'android' || dl.key === 'android_apk' || (dl.filename && dl.filename.endsWith('.apk'));
    let downloadFilename = dl.filename;
    if (!downloadFilename) {
      downloadFilename = isApk ? `vexta-v${dl.version || 'latest'}.apk` : `vexta-${dl.platform_key || 'client'}`;
    }
    if (isApk && !downloadFilename.endsWith('.apk')) {
      downloadFilename = `${downloadFilename}.apk`;
    }

    const base = downloadApiBaseUrl || 'https://downloads.orientis.digital';
    const url =
      dl.url ||
      (downloadFilename && downloadFilename.includes('.')
        ? `${base}/vexta/${downloadFilename}`
        : dl.platform_key && dl.version
        ? `${base}/api/v1/apps/vexta/download/${dl.version}/${dl.platform_key}`
        : `${base}/api/v1/apps/vexta/download/${dl.platform_key || 'windows'}`);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', downloadFilename);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 150);
  };

  // Check if entered hash matches any download
  const allDownloadsList = [...clientDownloads, ...olderDownloads];
  const matchingDownload = verifyHashInput.trim()
    ? allDownloadsList.find((d) => d.sha256 && d.sha256.toLowerCase() === verifyHashInput.trim().toLowerCase())
    : null;

  const currentVerDisplay = selectedVersion || latestClientVersion;
  const currentBuildDisplay = latestClientBuild ? ` (b${latestClientBuild})` : '';

  return (
    <div className="flex flex-col gap-10 py-4 w-full min-h-[75vh]">
      
      {/* 1. Header */}
      <SectionHeader
        tag="OFFICIAL BINARIES"
        title="Download Vexta Client"
        description="Select your operating system to download the official native client. No phone number or account required."
      />

      {loading ? (
        /* LOADING STATE */
        <BentoCard hover={false} brackets={true} className="p-8 md:p-12 border-[#1e2e4a] bg-[#0c1322] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="w-14 h-14 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-2xl shrink-0">
              <i className="fa-solid fa-cloud-arrow-down animate-bounce"></i>
            </div>
            <div className="flex flex-col text-left flex-1 gap-1">
              <span className="text-base font-mono font-semibold text-[#f8fafc] uppercase tracking-wider">
                Querying Release Repositories...
              </span>
              <span className="text-xs text-[#94a3b8] font-mono">
                Fetching verified binary manifests and signed checksums
              </span>
            </div>
          </div>
          <div className="w-full md:w-40 h-10 rounded-[2px] bg-[#08101d] border border-[#1e2e4a] flex items-center justify-center font-mono text-xs text-[#4ade80] uppercase tracking-wider">
            <i className="fa-solid fa-circle-notch fa-spin mr-2 text-[#39ff14]"></i>
            Connecting
          </div>
        </BentoCard>
      ) : (
        /* 2. THREE SIMPLIFIED CARDS: WINDOWS, ANDROID, LINUX */
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CARD 1: WINDOWS */}
            <BentoCard span="col-span-1" brackets={true} className="p-6 md:p-7 flex flex-col justify-between gap-6 bg-[#0c1322] border-[#1e2e4a] hover:border-[#22c55e] transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-2xl shrink-0">
                      <i className="fa-brands fa-windows"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold text-[#f8fafc] uppercase font-mono">Windows</h2>
                      <span className="text-xs font-mono text-[#94a3b8]">x64 (Windows 10 / 11)</span>
                    </div>
                  </div>
                  <StatusBadge label="STABLE" variant="green" />
                </div>

                {currentVerDisplay && (
                  <div className="text-xs font-mono text-[#4ade80] bg-[#081a10] p-2 rounded-[2px] border border-[#1b3d22]">
                    // RELEASE: v{currentVerDisplay}{currentBuildDisplay}
                  </div>
                )}

                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Fast native client for Windows desktops and laptops. Includes automatic local vault management and background notifications.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-[#1e2e4a]">
                {winSetup && (
                  <button
                    onClick={() => triggerDownload(winSetup)}
                    className="btn-cyber-primary w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-download text-xs text-[#39ff14]"></i>
                    <span>DOWNLOAD SETUP (.EXE)</span>
                  </button>
                )}

                {winPortable && (
                  <button
                    onClick={() => triggerDownload(winPortable)}
                    className="btn-cyber-ghost w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer hover:border-[#22c55e] hover:text-[#4ade80]"
                  >
                    <i className="fa-solid fa-bolt text-xs"></i>
                    <span>PORTABLE (.EXE)</span>
                  </button>
                )}

                {winMsi && (
                  <button
                    onClick={() => triggerDownload(winMsi)}
                    className="btn-cyber-ghost w-full py-2 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer hover:border-[#22c55e] hover:text-[#4ade80]"
                  >
                    <span>ENTERPRISE (.MSI)</span>
                  </button>
                )}

                {(winSetup?.sha256 || winPortable?.sha256) && (
                  <CopyPill
                    text={(winSetup || winPortable).sha256}
                    displayValue={`SHA: ${(winSetup || winPortable).sha256.slice(0, 16)}...`}
                    className="w-full mt-1"
                  />
                )}
              </div>
            </BentoCard>

            {/* CARD 2: ANDROID */}
            <BentoCard span="col-span-1" brackets={true} className="p-6 md:p-7 flex flex-col justify-between gap-6 bg-[#0c1322] border-[#1e2e4a] hover:border-[#22c55e] transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-2xl shrink-0">
                      <i className="fa-brands fa-android"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold text-[#f8fafc] uppercase font-mono">Android</h2>
                      <span className="text-xs font-mono text-[#94a3b8]">ARM64 (Android 8.0+)</span>
                    </div>
                  </div>
                  <StatusBadge label="MOBILE" variant="neon" />
                </div>

                {currentVerDisplay && (
                  <div className="text-xs font-mono text-[#4ade80] bg-[#081a10] p-2 rounded-[2px] border border-[#1b3d22]">
                    // RELEASE: v{currentVerDisplay}{latestApk?.build_number ? ` (b${latestApk.build_number})` : currentBuildDisplay}
                  </div>
                )}

                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Standalone mobile package for Android phones and tablets. Direct APK sideload with zero Google Play services requirement.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-[#1e2e4a]">
                {latestApk ? (
                  <button
                    onClick={() => triggerDownload(latestApk)}
                    className="btn-cyber-primary w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-download text-xs text-[#39ff14]"></i>
                    <span>DOWNLOAD APK (.APK)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => triggerDownload({ filename: `vexta-v${currentVerDisplay || 'latest'}.apk`, platform_key: 'android' })}
                    className="btn-cyber-primary w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-download text-xs text-[#39ff14]"></i>
                    <span>DOWNLOAD APK (.APK)</span>
                  </button>
                )}

                <div className="text-[11px] font-mono text-[#94a3b8] text-center py-1">
                  Supports Android 8.0+ / ARM64
                </div>

                {latestApk?.sha256 && (
                  <CopyPill
                    text={latestApk.sha256}
                    displayValue={`SHA: ${latestApk.sha256.slice(0, 16)}...`}
                    className="w-full mt-1"
                  />
                )}
              </div>
            </BentoCard>

            {/* CARD 3: LINUX */}
            <BentoCard span="col-span-1" brackets={true} className="p-6 md:p-7 flex flex-col justify-between gap-6 bg-[#0c1322] border-[#1e2e4a] hover:border-[#22c55e] transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-2xl shrink-0">
                      <i className="fa-brands fa-linux"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold text-[#f8fafc] uppercase font-mono">Linux</h2>
                      <span className="text-xs font-mono text-[#94a3b8]">x86_64 / Debian</span>
                    </div>
                  </div>
                  <StatusBadge label="STABLE" variant="green" />
                </div>

                {currentVerDisplay && (
                  <div className="text-xs font-mono text-[#4ade80] bg-[#081a10] p-2 rounded-[2px] border border-[#1b3d22]">
                    // RELEASE: v{currentVerDisplay}{currentBuildDisplay}
                  </div>
                )}

                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Universal AppImage (runs on Ubuntu, Fedora, Arch, Debian) and native Debian (.deb) package with zero external dependencies.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-[#1e2e4a]">
                {latestAppImage ? (
                  <button
                    onClick={() => triggerDownload(latestAppImage)}
                    className="btn-cyber-primary w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-download text-xs text-[#39ff14]"></i>
                    <span>DOWNLOAD APPIMAGE</span>
                  </button>
                ) : (
                  <button
                    onClick={() => triggerDownload({ filename: `vexta-v${currentVerDisplay || 'latest'}.AppImage`, platform_key: 'linux' })}
                    className="btn-cyber-primary w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-download text-xs text-[#39ff14]"></i>
                    <span>DOWNLOAD APPIMAGE</span>
                  </button>
                )}

                {latestDeb && (
                  <button
                    onClick={() => triggerDownload(latestDeb)}
                    className="btn-cyber-ghost w-full py-2.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer hover:border-[#22c55e] hover:text-[#4ade80]"
                  >
                    <span>DEBIAN PACKAGE (.DEB)</span>
                  </button>
                )}

                {(latestAppImage?.sha256 || latestDeb?.sha256) && (
                  <CopyPill
                    text={(latestAppImage || latestDeb).sha256}
                    displayValue={`SHA: ${(latestAppImage || latestDeb).sha256.slice(0, 16)}...`}
                    className="w-full mt-1"
                  />
                )}
              </div>
            </BentoCard>

          </div>

          {/* 3. OPTIONAL VERIFIER & ARCHIVE ACCORDIONS */}
          <div className="flex flex-col gap-4 mt-2">
            
            {/* SHA-256 Checksum Verifier Card */}
            <BentoCard hover={false} brackets={true} className="p-0 overflow-hidden bg-[#0c1322] border-[#1e2e4a]">
              <button
                onClick={() => setShowVerifier(!showVerifier)}
                className="w-full p-4 md:p-5 flex items-center justify-between text-xs font-mono font-semibold uppercase text-[#4ade80] hover:text-[#39ff14] bg-[#08101d] transition-colors cursor-pointer select-none"
              >
                <span className="flex items-center gap-2.5">
                  <i className="fa-solid fa-fingerprint text-sm text-[#39ff14]"></i>
                  <span>VERIFY SHA-256 RELEASE CHECKSUM</span>
                </span>
                <i className={`fa-solid ${showVerifier ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs text-[#94a3b8]`}></i>
              </button>

              {showVerifier && (
                <div className="p-6 border-t border-[#1e2e4a] flex flex-col gap-4 bg-[#070b12]">
                  <input
                    type="text"
                    value={verifyHashInput}
                    onChange={(e) => setVerifyHashInput(e.target.value)}
                    placeholder="Paste SHA-256 hash to test match against official release..."
                    className="w-full bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] p-3.5 font-mono text-xs text-[#f8fafc] focus:outline-none focus:border-[#22c55e] placeholder:text-[#64748b]"
                  />

                  {verifyHashInput.trim() && (
                    <div>
                      {matchingDownload ? (
                        <div className="p-3.5 rounded-[2px] bg-[#062016] border border-[#22c55e]/50 flex items-center gap-3 text-xs font-mono text-[#39ff14]">
                          <i className="fa-solid fa-circle-check text-base text-[#22c55e]"></i>
                          <span><strong>CHECKSUM VERIFIED:</strong> Matches official release <strong>{matchingDownload.filename}</strong></span>
                        </div>
                      ) : (
                        <div className="p-3.5 rounded-[2px] bg-[#2b0d0d] border border-[#ef4444]/50 flex items-center gap-3 text-xs font-mono text-[#f87171]">
                          <i className="fa-solid fa-triangle-exclamation text-base text-[#ef4444]"></i>
                          <span><strong>NO MATCH FOUND:</strong> Checksum does not match any official release artifacts.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </BentoCard>

            {/* Release History Archive Card */}
            <BentoCard hover={false} brackets={true} className="p-0 overflow-hidden bg-[#0c1322] border-[#1e2e4a]">
              <button
                onClick={() => setShowArchive(!showArchive)}
                className="w-full p-4 md:p-5 flex items-center justify-between text-xs font-mono font-semibold uppercase text-[#4ade80] hover:text-[#39ff14] bg-[#08101d] transition-colors cursor-pointer select-none"
              >
                <span className="flex items-center gap-2.5">
                  <i className="fa-solid fa-clock-rotate-left text-sm text-[#22c55e]"></i>
                  <span>RELEASE ARCHIVE &amp; HISTORICAL VERSIONS</span>
                </span>
                <i className={`fa-solid ${showArchive ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs text-[#94a3b8]`}></i>
              </button>

              {showArchive && (
                <div className="p-6 border-t border-[#1e2e4a] flex flex-col gap-4 bg-[#070b12]">
                  {availableVersions && availableVersions.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-[#94a3b8] mr-1">// FILTER VERSION:</span>
                      {availableVersions.map((v) => (
                        <button
                          key={v}
                          onClick={() => selectReleaseByVersion(v)}
                          className={`px-3 py-1 rounded-[2px] font-mono text-xs uppercase cursor-pointer transition-all ${
                            (selectedVersion || latestClientVersion) === v
                              ? 'bg-[#081a10] text-[#39ff14] border border-[#1b3d22] font-semibold'
                              : 'bg-[#08101d] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e2e4a]'
                          }`}
                        >
                          v{v}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
                    {olderDownloads.length > 0 ? (
                      olderDownloads.map((dl) => (
                        <div
                          key={dl.filename}
                          className="flex items-center justify-between p-3 rounded-[2px] bg-[#0c1322] border border-[#1e2e4a] text-xs font-mono"
                        >
                          <div className="flex items-center gap-3 truncate">
                            <span className="text-[#39ff14] font-semibold">v{dl.version}{dl.build_number ? ` (b${dl.build_number})` : ''}</span>
                            <span className="text-[#cbd5e1] truncate">{dl.filename}</span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-[#94a3b8] text-[11px]">{dl.size}</span>
                            <button
                              onClick={() => triggerDownload(dl)}
                              className="btn-cyber-primary px-3 py-1 text-xs"
                            >
                              GET
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs font-mono text-[#94a3b8] text-center py-3">
                        No older releases archived.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </BentoCard>

          </div>
        </div>
      )}

    </div>
  );
}
