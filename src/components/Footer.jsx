import React from "react";

function Footer() {
  return (
    <footer
      className="py-2 bg-dark position-relative bottom-0" 
      style={{
        width: "100%",
        marginTop: "-20px", 
        background: "linear-gradient(to right, #343a40, #495057)",
        color: "#ffffff",
      }}
    >
      <div className="container text-center">
        <p className="m-0 text-center fst-normal">
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#32CD32",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#32CD32")}
          >
            <img
              className="text-center"
              src="/images/Store-Logo.png"
              alt="logo"
              style={{ width: "100px", borderRadius: "50%", marginBottom: "10px" }}
            />
          </a>
          <span> Registered ®️ {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
