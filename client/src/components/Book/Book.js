import React from "react";

function Book() {
    return (
        <main className="page blog-post-list">
            <section className="clean-block clean-blog-list dark">
                <div className="container" style={{ paddingTop: "30px" }}>
                    <div className="block-content mt-3">
                        <div className="clean-blog-post">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/img/hp.png"
                                    />
                                </div>
                                <div className="col-lg-7">
                                    <h3>Harry Potter and Chamber of Secrets</h3>
                                    <div className="info">
                                        <span className="text-muted">
                                            by&nbsp;
                                            <a href="#">
                                                <strong>John Smith</strong>
                                            </a>
                                        </span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc quam urna,
                                        dignissim nec auctor in, mattis vitae
                                        leo. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Nunc quam
                                        urna, dignissim nec auctor in, mattis
                                        vitae leo.
                                    </p>
                                    <button
                                        className="btn btn-outline-primary btn-sm mr-2"
                                        type="button"
                                    >
                                        View
                                    </button>
                                    <button
                                        className="btn btn-outline-primary btn-sm btn-outline-danger"
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Book;
