const useFadeIn = (duration = 2, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  // 레퍼런스 생성
  const element = useRef();
  // 컴포넌트가 렌더링 된 직후 실행
  useEffect(() => {
    if (element) {
      const { current } = element;
      // fade-in 스타일링
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  // opacity: 0으로 처음에는 요소를 감춤
  return { ref: element, style: { opacity: 0 } };
};
