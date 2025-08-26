import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';

export default function RecruitLanding() {
  const [field, setField] = useState('');
  const [fieldModile, setFieldMobile] = useState('');

  useEffect(() => {
    const values = ['management', 'frontend', 'backend', 'design'];
    let index = 0;
    let intervalId;
    let timeoutId = setTimeout(() => {
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
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "white",
        fontFamily:
          "Pretendard,Montserrat,-apple-system,Apple SD Gothic Neo,sans-serif",
      }}
    >
      <video
        src="/background.webm"
        poster="/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",         // 화면을 꽉 채움
          objectPosition: "15% 50%",  // 가로 15% 지점, 세로 중앙
          zIndex: 0,
        }}
      />
      {/* 오버레이 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
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
            whiteSpace: "normal",   // ✅ 줄바꿈 허용
            wordBreak: "keep-all",  // ✅ 단어 중간 줄바꿈 금지
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
            flexWrap: "wrap",            // ✅ 줄바꿈 허용
            justifyContent: "space-between", // ✅ 한 줄일 땐 양끝
            alignItems: "center",
            columnGap: 16,
            rowGap: 6,                   // ✅ 줄바꿈 시 세로 간격
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
            4TH RECRUITMENT
          </div>

          <div
            style={{
              flex: "0 0 auto",          // ✅ 내용 폭 유지(강제 확장 X)
              color:'#F1EDEA',
              fontSize: "clamp(22px, 5vw, 30px)",
              letterSpacing: ".6px",
              fontFamily: "Montserrat",
              textAlign: "left",         // ✅ 줄바꿈되면 자동으로 왼쪽에 놓임
            }}
          >
            2025. 08. 31 - 09. 06
          </div>
        </div>
<AnimatePresence>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 2 }}
    style={{
      position: "absolute",
      bottom: -20,              // ✅ 화면 맨 아래에 붙임
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
        style={{ width: "10vw", maxWidth: "50px", height: "auto",opacity:0.4 }}
      />
    </motion.div>
  </motion.div>
</AnimatePresence>

      </footer>
    </div>
  );
}
