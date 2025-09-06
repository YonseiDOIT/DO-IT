import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function RecruitLanding() {
  const [field, setField] = useState('');
  const [fieldModile, setFieldMobile] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    // 초기 진입 시 VIDEO가 포커스를 잡으면 강제 해제한다.
    const act = document.activeElement;
    if (act && act.tagName === 'VIDEO') {
      try { act.blur(); } catch {}
      // 안전한 컨테이너로 포커스 이동
      containerRef.current?.focus();
    }

    const values = ['management', 'frontend', 'backend', 'design'];
    let index = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setFieldMobile(values[index]);
        index = (index + 1) % values.length;
      }, 2000);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        minWidth: "320px",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "white",
        fontFamily:
          "Pretendard,Montserrat,-apple-system,Apple SD Gothic Neo,sans-serif",
      }}
    >
      {/* 비디오 기본 컨트롤을 전역 수준에서 숨김 */}
      <style jsx global>{`
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure,
        video::-webkit-media-controls-panel { display: none !important; }
      `}</style>

      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        tabIndex={-1}
        aria-hidden="true"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
        preload="auto"
        onContextMenu={(e) => e.preventDefault()}
        onFocus={(e) => { try { e.currentTarget.blur(); } catch {} }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "15% 50%",
          zIndex: 0,
          pointerEvents: "none",
          outline: "none",
          userSelect: "none",
        }}
      >
        {/* iOS 호환을 위해 mp4 우선 제공 */}
        <source src="/background.mp4" type="video/mp4" />
        <source src="/background.webm" type="video/webm" />
      </video>

      {/* 오버레이 */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* 메인 히어로 */}
      <main
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          marginTop: "clamp(160px, 30vw, 200px)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(48px, 10vw, 78px)",
            lineHeight: 1.3,
            fontFamily: "Montserrat",
          }}
        >
          DRIVEN{"\u00A0"}BY PASSION{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
        </p>
        <p
          style={{
            marginTop: 20,
            fontSize: "clamp(28px, 6vw, 38px)",
            whiteSpace: "normal",
            wordBreak: "keep-all",
          }}
        >
          함께하는 열정, 나아가는{"\u00A0"}성장
        </p>
      </main>

      {/* 푸터 */}
      <footer
        style={{
          position: "absolute",
          bottom: 70,
          padding: "0 20px",
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            borderTop: "1px solid #F1EDEA",
            margin: "0 auto",
            padding: "24px 0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 16,
            rowGap: 6,
          }}
        >
          <div
            style={{
              flex: "0 0 auto",
              color:'#F1EDEA',
              fontSize: "clamp(22px, 5vw, 30px)",
              letterSpacing: ".6px",
              fontFamily: "Montserrat",
            }}
          >
            4TH RECRUITMENT{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
          </div>

          <div
            style={{
              flex: "0 0 auto",
              color:'#F1EDEA',
              fontSize: "clamp(22px, 5vw, 30px)",
              letterSpacing: ".6px",
              fontFamily: "Montserrat",
              textAlign: "left",
            }}
          >
            2025. 08. 31 - 09. 09
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            style={{
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
            }}
          >
            <motion.div
              initial={{ translateY: 0 }}
              animate={{ translateY: 10 }}
              exit={{ translateY: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                ease: "circIn",
                duration: 1,
              }}
            >
              <Image
                src="/DownBtn2.png"
                width={70}
                height={70}
                alt="downBtn"
                style={{ width: "10vw", maxWidth: "50px", height: "auto", opacity: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </footer>
    </div>
  );
}
