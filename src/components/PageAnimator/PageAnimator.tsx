// @react Compiler skip

import { motion as m } from "framer-motion";
import React, { useMemo } from "react";

function PageAnimator({ children }: { children: React.ReactNode }) {
  const animatedContent = useMemo(
    () => (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="animatepage"
      >
        {children}
      </m.div>
    ),
    [children] // Dependency to ensure re-render when children change
  );

  return animatedContent;
}

export default PageAnimator;
