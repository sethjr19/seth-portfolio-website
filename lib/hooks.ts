import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section"
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
const { ref, inView } = useInView({
threshold: 0.5,
});
const { setActiveSection } = useActiveSectionContext();

useEffect(() => {
if (inView) {
setActiveSection(sectionName);
}
}, [inView, setActiveSection]);
return {
ref,
inView,
};
}
