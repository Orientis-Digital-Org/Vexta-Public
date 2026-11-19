import React, { useState, useEffect } from 'react';
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

  const [detectedOS, setDetectedOS] = useState('windows');
  const [selectedWinFormat, setSelectedWinFormat] = useState('setup'); // 'setup' | 'portable' | 'msi'
  const [verifyHashInput, setVerifyHashInput] = useState('');
  const [showArchive, setShowArchive] = useState(false);
  const [showVerifier, setShowVerifier] = useState(false);

  // Auto-detect visitor operating system on mount
  useEffect(() => {
    const ua = (typeof window !== 'undefined' && navigator.userAgent) ? navigator.userAgent.toLowerCase() : '';
    if (ua.includes('android')) setDetectedOS('android');
    else if (ua.includes('linux')) setDetectedOS('linux');
    else if (ua.includes('mac') || ua.includes('darwin')) setDetectedOS('macos');
    else setDetectedOS('windows');
  }, []);

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
  const latestTarGz = clientDownloads.find((d) => d.platform_key === 'linux' && d.filename?.endsWith('.tar.gz'));
  const latestApk = clientDownloads.find(
    (d) => d.platform_key === 'android' || d.key === 'android_apk' || d.filename?.endsWith('.apk')
  );

  const triggerDownload = (dl) => {
    if (!dl) return;
    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.75 },
        colors: ['#38bdf8', '#0ea5e9', '#0284c7'],
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

  // Determine active Windows target based on user selection
  const getActiveWinTarget = () => {
    if (selectedWinFormat === 'portable') return winPortable || winSetup || winMsi;
    if (selectedWinFormat === 'msi') return winMsi || winSetup || winPortable;
    return winSetup || winPortable || winMsi;
  };

  // Determine Primary Recommended Download
  const getPrimaryDownload = () => {
    if (detectedOS === 'linux') {
      return {
        target: latestAppImage || latestDeb || latestTarGz,
        osName: 'Linux',
        icon: 'fa-brands fa-linux',
        typeLabel: 'AppImage (x86_64)',
        altTarget: latestDeb,
        altLabel: 'Download .deb Package',
      };
    }
    if (detectedOS === 'android') {
      return {
        target: latestApk,
        osName: 'Android',
        icon: 'fa-brands fa-android',
        typeLabel: 'ARM64 APK Package',
        altTarget: null,
        altLabel: '',
      };
    }

    const winTarget = getActiveWinTarget();
    const typeLabel = selectedWinFormat === 'portable' 
      ? 'Standalone Portable (.exe)' 
      : selectedWinFormat === 'msi' 
      ? 'Enterprise Package (.msi)' 
      : 'Setup Wizard (.exe)';

    return {
      target: winTarget,
      osName: 'Windows',
      icon: 'fa-brands fa-windows',
      typeLabel: typeLabel,
      altTarget: null,
      altLabel: '',
    };
  };

  const primary = getPrimaryDownload();

  // Check if entered hash matches any download
  const allDownloadsList = [...clientDownloads, ...olderDownloads];
  const matchingDownload = verifyHashInput.trim()
    ? allDownloadsList.find((d) => d.sha256 && d.sha256.toLowerCase() === verifyHashInput.trim().toLowerCase())
    : null;

  return (
    <div className="flex flex-col gap-12 py-4 w-full min-h-[75vh]">
      
      {/* 1. HERO HEADER */}
      <SectionHeader
        tag="RELEASE REGISTRY"
        title="Get Vexta Client"
        description="Zero-knowledge, end-to-end encrypted messaging. All cryptography, private keys, and ratchet chains remain strictly on your local hardware."
      />

      {loading ? (
        /* LOADING STATE */
        <div className="flex flex-col gap-8 animate-in fade-in duration-300">
          <BentoCard hover={false} brackets={true} className="p-8 md:p-12 border-[#1e2e4a] bg-[#0c1322] shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="relative w-16 h-16 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-3xl shrink-0 shadow-lg">
                <span className="status-pulse"></span>
                <i className="fa-solid fa-cloud-arrow-down animate-bounce text-2xl text-[#38bdf8]"></i>
              </div>
              <div className="flex flex-col text-left flex-1 gap-2">
                <div className="flex items-center gap-2">
                  <span className="status-pulse"></span>
                  <span className="text-base md:text-lg font-mono font-semibold text-[#f8fafc] uppercase tracking-wider">
                    Querying Release Repositories...
                  </span>
                </div>
                <span className="text-xs md:text-sm text-[#94a3b8] font-mono">
                  Fetching verified binary manifests, signed checksums, and mirror endpoints
                </span>
                <div className="w-48 h-1.5 bg-[#070b12] rounded-[2px] overflow-hidden border border-[#1e2e4a] mt-1 relative">
                  <div className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#0ea5e9] rounded-[2px] animate-pulse w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-44 h-11 rounded-[2px] bg-[#08101d] border border-[#1e2e4a] flex items-center justify-center font-mono text-xs md:text-sm text-[#38bdf8] font-medium uppercase tracking-wider select-none">
              <i className="fa-solid fa-circle-notch fa-spin mr-2 text-[#38bdf8]"></i>
              Connecting
            </div>
          </BentoCard>
        </div>
      ) : (
        /* LOADED STATE WITH BENTO CARDS */
        <div className="flex flex-col gap-10 animate-in fade-in duration-300">
          
          {/* 2. PRIMARY SPOTLIGHT BENTO CARD */}
          <BentoCard hover={false} glow={true} brackets={true} className="p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border-[#1e3a66] bg-[#0c1322]">
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="w-16 h-16 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-3xl shrink-0 shadow-lg p-3">
                <i className={primary.icon}></i>
              </div>
              <div className="flex flex-col text-left flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xl md:text-2xl font-bold text-[#f8fafc] uppercase tracking-wider font-sans">
                    Vexta for {primary.osName}
                  </span>
                  {(selectedVersion || latestClientVersion) && (
                    <StatusBadge
                      label={`v${selectedVersion || latestClientVersion}${primary.target?.build_number ? ` (b${primary.target.build_number})` : (latestClientBuild ? ` (b${latestClientBuild})` : '')}`}
                      variant="cyan"
                    />
                  )}
                </div>
                <span className="text-xs md:text-sm text-[#94a3b8] font-mono mt-1.5">
                  Recommended for your environment • {primary.typeLabel} {primary.target?.size ? `(${primary.target.size})` : ''}
                </span>

                {/* Windows Format Switcher */}
                {detectedOS === 'windows' && (
                  <div className="flex items-center gap-1.5 mt-3.5 bg-[#08101d] p-1 rounded-[2px] border border-[#1e2e4a] w-fit">
                    <button
                      onClick={() => setSelectedWinFormat('setup')}
                      className={`px-3 py-1 rounded-[2px] text-xs font-mono font-medium transition-all cursor-pointer ${
                        selectedWinFormat === 'setup'
                          ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] shadow-[0_0_8px_rgba(56,189,248,0.2)]'
                          : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
                      }`}
                    >
                      <i className="fa-solid fa-box mr-1.5 text-xs text-[#38bdf8]"></i> Setup (.exe)
                    </button>
                    <button
                      onClick={() => setSelectedWinFormat('portable')}
                      className={`px-3 py-1 rounded-[2px] text-xs font-mono font-medium transition-all cursor-pointer ${
                        selectedWinFormat === 'portable'
                          ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] shadow-[0_0_8px_rgba(56,189,248,0.2)]'
                          : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
                      }`}
                    >
                      <i className="fa-solid fa-bolt mr-1.5 text-xs text-[#38bdf8]"></i> Portable (.exe)
                    </button>
                    <button
                      onClick={() => setSelectedWinFormat('msi')}
                      className={`px-3 py-1 rounded-[2px] text-xs font-mono font-medium transition-all cursor-pointer ${
                        selectedWinFormat === 'msi'
                          ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] shadow-[0_0_8px_rgba(56,189,248,0.2)]'
                          : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
                      }`}
                    >
                      <i className="fa-solid fa-building mr-1.5 text-xs text-[#38bdf8]"></i> MSI (.msi)
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button & Hash Pill */}
            <div className="flex flex-col items-center md:items-end gap-3.5 w-full md:w-auto shrink-0">
              <button
                onClick={() => triggerDownload(primary.target)}
                className="btn-cyber-primary w-full md:w-auto px-7 py-3 text-xs md:text-sm flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <i className="fa-solid fa-download text-xs text-[#38bdf8]"></i>
                <span>[ DOWNLOAD {primary.typeLabel.split(' ')[0].toUpperCase()} ]</span>
              </button>

              {primary.target?.sha256 && (
                <CopyPill
                  text={primary.target.sha256}
                  displayValue={`SHA-256: ${primary.target.sha256.slice(0, 16)}...`}
                  className="w-full md:w-auto"
                />
              )}
            </div>
          </BentoCard>

          {/* 3. ALL PLATFORMS BENTO GRID */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#1e2e4a] pb-3">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8] flex items-center gap-2">
                <span className="status-pulse"></span>
                <span>AVAILABLE TARGET PLATFORMS</span>
              </h2>
              <span className="text-[11px] font-mono text-[#94a3b8]">CRYPTOGRAPHICALLY VERIFIED BINARIES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* WINDOWS CARD */}
              <BentoCard span="col-span-1" brackets={true} className="p-6 justify-between gap-4 bg-[#0c1322] border-[#1e2e4a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-xl">
                      <i className="fa-brands fa-windows"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#f8fafc] uppercase font-mono">Windows</h3>
                      <span className="text-[11px] font-mono text-[#94a3b8]">x64 (Windows 10 / 11)</span>
                    </div>
                  </div>
                  <StatusBadge label="STABLE" variant="green" />
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-[#1e2e4a]">
                  {winSetup && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex flex-col">
                        <span className="text-[#f8fafc] font-medium">Setup (.exe)</span>
                        <span className="text-[10px] text-[#94a3b8]">Standard Installer</span>
                      </div>
                      <button
                        onClick={() => triggerDownload(winSetup)}
                        className="btn-cyber-ghost px-3 py-1 text-xs"
                      >
                        Get .exe
                      </button>
                    </div>
                  )}
                  {winPortable && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex flex-col">
                        <span className="text-[#f8fafc] font-medium">Portable (.exe)</span>
                        <span className="text-[10px] text-[#94a3b8]">Zero-Install Standalone</span>
                      </div>
                      <button
                        onClick={() => triggerDownload(winPortable)}
                        className="btn-cyber-ghost px-3 py-1 text-xs"
                      >
                        Get .exe
                      </button>
                    </div>
                  )}
                  {winMsi && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex flex-col">
                        <span className="text-[#f8fafc] font-medium">Enterprise (.msi)</span>
                        <span className="text-[10px] text-[#94a3b8]">Windows Installer</span>
                      </div>
                      <button
                        onClick={() => triggerDownload(winMsi)}
                        className="btn-cyber-ghost px-3 py-1 text-xs"
                      >
                        Get .msi
                      </button>
                    </div>
                  )}
                </div>
              </BentoCard>

              {/* ANDROID CARD */}
              <BentoCard span="col-span-1" brackets={true} className="p-6 justify-between gap-4 bg-[#0c1322] border-[#1e2e4a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-xl">
                      <i className="fa-brands fa-android"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#f8fafc] uppercase font-mono">Android</h3>
                      <span className="text-[11px] font-mono text-[#94a3b8]">ARM64 / APK Sideload</span>
                    </div>
                  </div>
                  <StatusBadge label="ACTIVE" variant="cyan" />
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-[#1e2e4a]">
                  {latestApk ? (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex flex-col">
                        <span className="text-[#f8fafc] font-medium">Direct Package (.apk)</span>
                        <span className="text-[10px] text-[#94a3b8]">Android 8.0+ (ARM64)</span>
                      </div>
                      <button
                        onClick={() => triggerDownload(latestApk)}
                        className="btn-cyber-primary px-3 py-1 text-xs"
                      >
                        Get .apk
                      </button>
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-[#94a3b8] py-1">
                      Build available in release registry
                    </div>
                  )}
                </div>
              </BentoCard>

              {/* LINUX CARD */}
              <BentoCard span="col-span-1" brackets={true} className="p-6 justify-between gap-4 bg-[#0c1322] border-[#1e2e4a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-xl">
                      <i className="fa-brands fa-linux"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#f8fafc] uppercase font-mono">Linux</h3>
                      <span className="text-[11px] font-mono text-[#94a3b8]">x86_64 / Debian</span>
                    </div>
                  </div>
                  <StatusBadge label="STABLE" variant="green" />
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-[#1e2e4a]">
                  {latestAppImage && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#f8fafc] font-medium">AppImage (x86_64)</span>
                      <button
                        onClick={() => triggerDownload(latestAppImage)}
                        className="btn-cyber-primary px-3 py-1 text-xs"
                      >
                        Get AppImage
                      </button>
                    </div>
                  )}
                  {latestDeb && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#cbd5e1] font-medium">Debian (.deb)</span>
                      <button
                        onClick={() => triggerDownload(latestDeb)}
                        className="btn-cyber-ghost px-3 py-1 text-xs"
                      >
                        Get .deb
                      </button>
                    </div>
                  )}
                  {!latestAppImage && !latestDeb && (
                    <div className="text-xs font-mono text-[#94a3b8] py-1">
                      Build available on demand
                    </div>
                  )}
                </div>
              </BentoCard>

            </div>
          </div>

          {/* 4. ADVANCED VERIFIER & ARCHIVE ACCORDIONS */}
          <div className="flex flex-col gap-4">
            
            {/* SHA-256 Checksum Verifier Card */}
            <BentoCard hover={false} brackets={true} className="p-0 overflow-hidden bg-[#0c1322] border-[#1e2e4a]">
              <button
                onClick={() => setShowVerifier(!showVerifier)}
                className="w-full p-5 flex items-center justify-between text-xs font-mono font-semibold uppercase text-[#38bdf8] hover:text-[#f8fafc] bg-[#08101d] transition-colors cursor-pointer select-none"
              >
                <span className="flex items-center gap-2.5">
                  <i className="fa-solid fa-fingerprint text-sm text-[#38bdf8]"></i>
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
                    placeholder="Paste SHA-256 hash to verify against release catalog..."
                    className="w-full bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] p-3.5 font-mono text-xs text-[#f8fafc] focus:outline-none focus:border-[#38bdf8] transition-colors"
                  />

                  {verifyHashInput.trim() && (
                    <div>
                      {matchingDownload ? (
                        <div className="p-3.5 rounded-[2px] bg-[#062016] border border-[#10b981]/50 flex items-center gap-3 text-xs font-mono text-[#34d399]">
                          <i className="fa-solid fa-circle-check text-base text-[#10b981]"></i>
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
                className="w-full p-5 flex items-center justify-between text-xs font-mono font-semibold uppercase text-[#38bdf8] hover:text-[#f8fafc] bg-[#08101d] transition-colors cursor-pointer select-none"
              >
                <span className="flex items-center gap-2.5">
                  <i className="fa-solid fa-clock-rotate-left text-sm text-[#0ea5e9]"></i>
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
                              ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] font-semibold'
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
                            <span className="text-[#38bdf8] font-semibold">v{dl.version}{dl.build_number ? ` (b${dl.build_number})` : ''}</span>
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
