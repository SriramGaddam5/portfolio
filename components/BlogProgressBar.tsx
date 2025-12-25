import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const BlogProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width={`${scrollProgress}%`}
      height="4px"
      bg="blue.500"
      zIndex={9999}
      transition="width 0.1s ease-out"
    />
  );
};

export default BlogProgressBar;
