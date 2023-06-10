import React, { useState } from "react";
import Image from "next/image";

function Project() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="propject" id="project">
            <div className="title">
                <h2>Project</h2>
            </div>
        </div>

    )
}

export default Project;