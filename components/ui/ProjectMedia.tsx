'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from 'react-icons/fa'
import type { Media } from '@/lib/data'

/** Plays muted on loop while on screen, unless the visitor prefers reduced
 * motion; then it shows the poster until played from the viewer. */
function CoverVideo({ item }: { item: Media }) {
  const video = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const el = video.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {})
      else el.pause()
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <video
      ref={video}
      src={item.src}
      poster={item.poster}
      width={item.width}
      height={item.height}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={item.alt}
      className="aspect-video w-full object-cover transition-transform duration-300 group-hover/shot:scale-[1.02]"
    />
  )
}

/** A project's cover image or video; clicking it opens every item full size. */
export default function ProjectMedia({ title, items }: { title: string; items: Media[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const open = (i: number) => {
    setIndex(i)
    setIsOpen(true)
    dialog.current?.showModal()
  }
  const step = (by: number) => setIndex((i) => (i + by + items.length) % items.length)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  })

  const cover = items[0]
  const current = items[index]
  const hasVideo = items.some((item) => item.type === 'video')
  const noun = hasVideo ? 'media' : 'screenshots'

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        aria-label={`View ${items.length} ${noun} of ${title}`}
        className="group/shot relative mb-5 block overflow-hidden rounded-lg border border-border"
      >
        {cover.type === 'video' ? (
          <CoverVideo item={cover} />
        ) : (
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover/shot:scale-[1.02]"
          />
        )}
        {cover.type === 'video' && (
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-2 py-0.5 font-mono text-xs text-fg backdrop-blur">
            <FaPlay size={8} /> Walkthrough
          </span>
        )}
        {items.length > 1 && (
          <span className="absolute right-2 bottom-2 rounded-full bg-bg/80 px-2 py-0.5 font-mono text-xs text-fg backdrop-blur">
            1 / {items.length}
          </span>
        )}
      </button>

      <dialog
        ref={dialog}
        aria-label={`${title} ${noun}`}
        onClose={() => setIsOpen(false)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[92vh] w-[min(1280px,94vw)] rounded-xl border border-border bg-surface p-0 text-fg backdrop:bg-black/80"
      >
        {isOpen && (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm">
              <span className="truncate text-muted">{current.alt}</span>
              <span className="flex shrink-0 items-center gap-3">
                <span className="font-mono text-xs text-muted">
                  {index + 1} / {items.length}
                </span>
                <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="text-muted hover:text-fg">
                  <FaTimes />
                </button>
              </span>
            </div>
            <div className="relative">
              {current.type === 'video' ? (
                <video
                  key={current.src}
                  src={current.src}
                  poster={current.poster}
                  width={current.width}
                  height={current.height}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-auto max-h-[80vh] w-full bg-black object-contain"
                />
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="94vw"
                  className="h-auto max-h-[80vh] w-full object-contain"
                />
              )}
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous"
                    className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-border bg-bg/80 p-2.5 text-fg backdrop-blur hover:border-accent"
                  >
                    <FaChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next"
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-border bg-bg/80 p-2.5 text-fg backdrop-blur hover:border-accent"
                  >
                    <FaChevronRight size={14} />
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  )
}
