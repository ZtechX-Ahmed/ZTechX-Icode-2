import React from "react";

const ThirdPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                fontFamily: "Cairo, Arial, sans-serif",
                direction: "rtl",
                padding: "40px 0",
                background: "#f7f8fa",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* صورة الهاتف */}
            <img
                src="./third page.png"
                alt="phone"
                style={{
                    width: "100%",
                    maxWidth: 600,
                    height: "auto",
                    display: "block",
                }}
            />
        </div>
    );
};

export default ThirdPage;
