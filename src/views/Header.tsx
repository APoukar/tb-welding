import { useRef } from "react";
import Menu from "./Menu";
import Welcome from "./Welcome";

export default function Header() {
    const menuRef = useRef(null);
    return (
        <>
            <Welcome menuRef={menuRef} />
            <div ref={menuRef}>
                <Menu />
            </div>
        </>
    )
}