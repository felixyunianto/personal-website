import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#050505",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "6px",
            background: "#DFFF4F",
            marginBottom: "54px",
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#DFFF4F",
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Frontend Developer
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "88px",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-4px",
              }}
            >
              <span>Felix</span>
              <span>Yunianto</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "28px",
                fontSize: "30px",
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.65)",
                maxWidth: "650px",
              }}
            >
              Building modern websites with Next.js, Tailwind CSS, Framer Motion
              and Laravel.
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "36px",
              }}
            >
              {["Next.js", "Laravel", "Tailwind", "Framer Motion"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "999px",
                      padding: "10px 18px",
                      fontSize: "18px",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "320px",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                background: "rgba(255,255,255,0.03)",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "18px",
                }}
              >
                Experience
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  fontSize: "52px",
                  fontWeight: 800,
                }}
              >
                3+
              </div>

              <div
                style={{
                  display: "flex",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "18px",
                }}
              >
                Years Building Web Apps
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "28px",
                background: "#DFFF4F",
                color: "#050505",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "18px",
                  opacity: 0.7,
                }}
              >
                Status
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  fontSize: "34px",
                  fontWeight: 800,
                }}
              >
                Available
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "6px",
                  fontSize: "18px",
                }}
              >
                For Freelance Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}