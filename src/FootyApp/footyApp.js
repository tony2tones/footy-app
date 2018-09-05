import React from "react";

const FootyApp = (props) => {
    return (
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/history">Previous Games</a></li>
                    </ul>
                </nav>
            </header>
            <section className="Posts">
                {posts}
            </section>
        </div >
    );
}

export default FootyApp;