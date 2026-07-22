import { useRef, useState, useCallback } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => setDragging(false);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[color:var(--maroon)]/20 select-none cursor-ew-resize touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After image (full, bottom layer) */}
        <img
          src={afterSrc}
          alt={afterAlt}
          loading="lazy"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        {/* Before image (clipped to left portion) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current?.clientWidth ?? "100%" }}
            draggable={false}
          />
        </div>
        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[color:var(--maroon)] pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cream border-2 border-[color:var(--maroon)] flex items-center justify-center shadow-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[color:var(--maroon)]">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 px-1">
        <span className="text-xs uppercase tracking-widest text-[color:var(--maroon)] font-medium">Before</span>
        <span className="text-xs uppercase tracking-widest text-[color:var(--maroon)] font-medium">After</span>
      </div>
    </div>
  );
}
