import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import VideoSection from './video'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class homepage extends Component {
    render() {
        // const { authError, user } = this.props;
        
        return (
            <Container fluid>
                <section id="tutorial" class="tutorial">
                    <div class="container">
                        <div class="col-lg-8 text-center mx-auto py-3" data-aos="zoom-out">
                            <h2 class="py-3">Effortlessly make a job-worthy resume and cover letter that gets you hired faster</h2>
                            <VideoSection />
                            <Link to="/resume2" class="btn btn-primary my-4 py-2">Build Your Resume</Link>
                        </div>
                    </div>
                </section>

                <section id="description" class="description bg-light py-5">
                    <div class="container">
                        <div class="section-title" data-aos="zoom-out">
                            <h2>ready-to-use</h2>
                            <p>TOOLS FOR CREATING A RESUME</p>
                        </div>
                        <div class="row" data-aos="fade-up">
                            <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                <h3>Use the best resume maker as your guide</h3>
                                <p class="font-italic">
                                Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                                </p>
                                <h3>Use the best resume maker as your guide</h3>
                                <p class="font-italic">
                                Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                                </p>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 text-center">
                                <img src='https://s3.resume.io/cdn-cgi/image/width=770,height=420,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg' alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" class="services py-5">
                    <div class="container">
                        <div class="section-title text-center" data-aos="zoom-out">
                            <h2>Feature</h2>
                            <p>SMART & EASY TO USE</p>
                        </div>

                        <div class="row">
                        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-basketball-ball"></i></div>
                            <h4 class="title"><a href="/">Easy online resume builder</a></h4>
                            <p class="description">Create an awesome resume, cover letter or online profile without leaving your web browser.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-5 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-book"></i></div>
                            <h4 class="title"><a href="/">Automatic spell-checker</a></h4>
                            <p class="description">Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-file-alt"></i></div>
                            <h4 class="title"><a href="/">Your data is safe</a></h4>
                            <p class="description">Your data is kept private and protected by strong 256-bit encryption.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-5" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-tachometer-alt"></i></div>
                            <h4 class="title"><a href="/">Automatic summary generator</a></h4>
                            <p class="description">Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-5" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-globe-americas"></i></div>
                            <h4 class="title"><a href="/">Approved templates</a></h4>
                            <p class="description">Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-5" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="las la-clock"></i></div>
                            <h4 class="title"><a href="/">Multi-format resume options</a></h4>
                            <p class="description">Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {
        authError: state.auth.authError,
        user: state.auth
    }
}

export default connect(mapStateToProps)(homepage)