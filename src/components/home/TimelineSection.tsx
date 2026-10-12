'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Eye, EyeOff, Volume2, Sparkles, Video, Type } from 'lucide-react';

interface TrackItem {
  id: string;
  name: string;
  type: 'video' | 'text' | 'fx' | 'audio';
  color: string;
  visible: boolean;
  activeClip: string;
}

export function TimelineSection() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playheadTime, setPlayheadTime] = useState<number>(2.4); // Seconds (0 to 10)
  const [selectedClip, setSelectedClip] = useState<string>('Headline_Inertia');

  // Tracks state
  const [tracks, setTracks] = useState<TrackItem[]>([
    { id: 'trk-1', name: 'Track 01: Video Base', type: 'video', color: '#4E95FF', visible: true, activeClip: 'Footage_Broll_4K' },
    { id: 'trk-2', name: 'Track 02: Kinetic Title', type: 'text', color: '#D6FF62', visible: true, activeClip: 'Headline_Inertia' },
    { id: 'trk-3', name: 'Track 03: Specular Shader FX', type: 'fx', color: '#FF5E3A', visible: true, activeClip: 'Lumina_Glow_Burst' },
    { id: 'trk-4', name: 'Track 04: Ambient Audio Stem', type: 'audio', color: '#A8B2C1', visible: true, activeClip: 'Master_Synth_Beat' },
  ]);

  // Playhead interval timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlayheadTime((prev) => {
          if (prev >= 9.8) return 0;
          return parseFloat((prev + 0.1).toFixed(2));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleTrackVisibility = (id: string) => {
    setTracks(tracks.map(t => t.id === id ? { ...t, visible: !t.visible } : t));
  };

  const handleResetTimeline = () => {
    setIsPlaying(false);
    setPlayheadTime(0);
    setSelectedClip('Headline_Inertia');
    setTracks(tracks.map(t => ({ ...t, visible: true })));
  };

  return (
    <section className="py-24 bg-[#0A0A0B] relative overflow-hidden" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Non-Destructive Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB]">
            Layered timeline & compositing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A4A1A0]">
            Creative blocks stack seamlessly onto independent tracks. Reorder layers, adjust easing curves, toggle visibility, and audition effects without ever baking pixels.
          </p>
        </div>

        {/* Main Editor Composition Container */}
        <div className="rounded-2xl border border-white/15 bg-[#141416] p-4 sm:p-6 shadow-2xl overflow-hidden">
          {/* Top Video Preview Stage */}
          <div className="relative h-64 sm:h-80 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center overflow-hidden mb-6">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            {/* Layer 1: Video Base Representation */}
            {tracks[0].visible && (
              <div
                className="absolute inset-0 transition-opacity duration-200"
                style={{
                  background: 'radial-gradient(ellipse at center, #182234 0%, #08080A 80%)',
                }}
              >
                <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/40">
                  SRC: footage_sequence_render.exr [TRACK 01 ACTIVE]
                </div>
              </div>
            )}

            {/* Layer 3: FX Lumina Shader */}
            {tracks[2].visible && (
              <div
                className="absolute w-72 h-72 rounded-full pointer-events-none blur-3xl transition-opacity duration-200"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 94, 58, 0.45) 0%, transparent 70%)',
                  transform: `scale(${0.8 + (playheadTime / 10) * 0.4})`,
                }}
              />
            )}

            {/* Layer 2: Kinetic Title */}
            {tracks[1].visible && (
              <div className="relative z-10 text-center select-none px-4">
                <div
                  className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F4F1EB] transition-all"
                  style={{
                    letterSpacing: `${playheadTime * 2}px`,
                    textShadow: tracks[2].visible ? '0 0 25px rgba(255, 94, 58, 0.6)' : 'none',
                  }}
                >
                  {selectedClip === 'Headline_Inertia' ? 'MOTIONFORM' : selectedClip.toUpperCase()}
                </div>
                <div className="text-xs font-mono text-[#D6FF62] mt-2">
                  SELECTED: [{selectedClip}] · TC: {playheadTime.toFixed(2)}s
                </div>
              </div>
            )}

            {!tracks[0].visible && !tracks[1].visible && (
              <div className="text-xs font-mono text-[#A4A1A0]">
                (All visual tracks currently muted)
              </div>
            )}

            {/* Watermark badge indicating illustrative demonstration */}
            <div className="absolute top-3 right-3 text-[10px] font-mono text-white/50 bg-black/60 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
              ILLUSTRATIVE TIMELINE ENGINE
            </div>
          </div>

          {/* Timeline Controls Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D6FF62] text-black font-semibold text-xs transition-transform active:scale-95 cursor-pointer shadow-sm"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                <span>{isPlaying ? 'Pause' : 'Play Timeline'}</span>
              </button>

              <button
                onClick={handleResetTimeline}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4A1A0] hover:text-white transition-colors cursor-pointer"
                aria-label="Reset timeline playhead"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="text-xs font-mono text-[#F4F1EB] pl-3 border-l border-white/10">
                TIMECODE: <span className="text-[#D6FF62] font-bold">00:0{Math.floor(playheadTime)}:{(playheadTime % 1 * 60).toFixed(0).padStart(2, '0')}</span> / 00:10:00
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#A4A1A0]">
              <span>Active Clip:</span>
              <span className="text-[#F4F1EB] font-bold bg-[#1C1C20] px-2 py-0.5 rounded border border-white/10">
                {selectedClip}
              </span>
            </div>
          </div>

          {/* Playhead Scrubber Range Input */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#A4A1A0] mb-1">
              <span>00:00.00</span>
              <span>PLAYHEAD POSITION ({playheadTime}s)</span>
              <span>00:10.00</span>
            </div>
            <input
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={playheadTime}
              onChange={(e) => setPlayheadTime(parseFloat(e.target.value))}
              className="w-full accent-[#D6FF62]"
              aria-label="Timeline scrub playhead"
            />
          </div>

          {/* Multi-Track Canvas Sequence */}
          <div className="space-y-2.5">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-xl border transition-all ${
                  track.visible ? 'bg-[#18181C] border-white/10' : 'bg-[#101012] border-white/5 opacity-50'
                }`}
              >
                {/* Track Header & Visibility Toggle */}
                <div className="flex items-center justify-between sm:w-48 shrink-0">
                  <div className="flex items-center gap-2">
                    {track.type === 'video' && <Video className="w-3.5 h-3.5 text-[#4E95FF]" />}
                    {track.type === 'text' && <Type className="w-3.5 h-3.5 text-[#D6FF62]" />}
                    {track.type === 'fx' && <Sparkles className="w-3.5 h-3.5 text-[#FF5E3A]" />}
                    {track.type === 'audio' && <Volume2 className="w-3.5 h-3.5 text-[#A8B2C1]" />}
                    <span className="text-xs font-mono text-[#F4F1EB] truncate">
                      {track.name}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleTrackVisibility(track.id)}
                    className="p-1 text-[#A4A1A0] hover:text-white transition-colors cursor-pointer"
                    aria-label={`Toggle visibility for ${track.name}`}
                  >
                    {track.visible ? <Eye className="w-3.5 h-3.5 text-[#D6FF62]" /> : <EyeOff className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Track Clips Ribbon */}
                <div className="flex-1 h-9 rounded-lg bg-[#0A0A0C] border border-white/10 relative overflow-hidden flex items-center p-1">
                  {/* Clip block */}
                  <div
                    onClick={() => setSelectedClip(track.activeClip)}
                    className={`h-full px-3 rounded flex items-center justify-between text-[11px] font-mono cursor-pointer transition-all ${
                      selectedClip === track.activeClip
                        ? 'border border-white/50 text-white font-semibold shadow-md'
                        : 'text-white/80 hover:opacity-90'
                    }`}
                    style={{
                      backgroundColor: track.color,
                      color: track.type === 'text' ? '#000000' : '#FFFFFF',
                      width: track.type === 'video' ? '100%' : track.type === 'text' ? '65%' : track.type === 'fx' ? '45%' : '80%',
                      marginLeft: track.type === 'fx' ? '25%' : '0%',
                    }}
                  >
                    <span className="truncate">{track.activeClip}</span>
                    <span className="text-[10px] opacity-75 hidden sm:inline">
                      {track.type === 'video' ? '0s-10s' : track.type === 'text' ? '0s-6.5s' : '2.5s-7s'}
                    </span>
                  </div>

                  {/* Playhead vertical marker */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_white] pointer-events-none transition-all duration-75"
                    style={{ left: `${(playheadTime / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
