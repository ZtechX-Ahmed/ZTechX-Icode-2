import React from "react";

const FourthPage: React.FC = () => {
    return (
        <div
            style={{
                background: "#fff",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
            }}
        >
            <img
                src="./fourth page.png"
                alt="Animated Infographic"
                style={{
                    width: "100%",
                    maxWidth: "750px",
                    height: "auto",
                    filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.15))",
                    borderRadius: "12px",
                }}
            />
            <style>
                {`
                    @media (min-width: 600px) {
                        img {
                            max-width: 700px;
                        }
                    }
                    @media (min-width: 900px) {
                        img {
                            max-width: 1000px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default FourthPage;
