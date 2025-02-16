import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
    duration: 1.2, // Adjust smoothness
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Force scroll to top immediately
        setTimeout(() => {
            lenis.scrollTo(0, { immediate: true });
        }, 10); // Delay fixes inconsistent scroll resets

    }, [location.pathname]); // Runs when route changes

    return null;
};

export default ScrollToTop;
