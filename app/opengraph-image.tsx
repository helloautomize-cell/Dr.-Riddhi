import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dr. Riddhi D. Shah — Gynaecologist and laparoscopic surgeon, Borivali West, Mumbai";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FBF7F3",
          color: "#2B1E24",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#B93A69",
            }}
          />
          <div style={{ fontSize: 30, color: "#6B5A62", letterSpacing: 2 }}>
            MUMBAI GASTRO-LIVER AND GYNAEC CENTRE
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 30, color: "#B93A69" }}>
            Gynaecologist · Laparoscopic surgeon · Borivali West
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, color: "#5E2A2C", lineHeight: 1.05 }}>
            Dr. Riddhi D. Shah
          </div>
          <div style={{ fontSize: 36, color: "#6B5A62" }}>
            Women&apos;s health, understood.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#6B5A62" }}>
          <div>Mon–Fri · 10 am–12 pm, 4–6 pm</div>
          <div>Emergency: call 108 or 112</div>
        </div>
      </div>
    ),
    size
  );
}
