import React from "react";

export const Footer = () => {
    return  (
        <div className="bg-dark text-white text-center py-5 mt-auto">
            <div className="container">
                <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p>
            </div>
        </div>
);
};