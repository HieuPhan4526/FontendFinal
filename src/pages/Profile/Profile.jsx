import React from 'react'
import { useSelector } from 'react-redux'
import styleProfile from "../../assets/css/styleProfile.module.css"

export default function Profile() {
    let {user} = useSelector((state) => state.UserReducer)
    console.log(user)
    return (
        <div className='container'>
            <div className={styleProfile["profile"]}>
                <div className={`${styleProfile["pd-left"]}`}>
                    <div className={styleProfile["left-content"]}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div
                                className={styleProfile["avatar"]}
                                style={{
                                    backgroundColor: `#${user.phone.slice(0, 6)}`,
                                    position: "relative",
                                }}
                            >
                                <div className={styleProfile["avatar-text"]}>
                                    {user.name.charAt(0)}
                                </div>
                            </div>
                        </div>

                        <h5 style={{ textAlign: "center" }}>{user.name}</h5>
                        <hr />
                        <div className={styleProfile["left-item"]}>
                            <span>From</span>
                            <b>Da Nang</b>
                        </div>
                        <div className={styleProfile["left-item"]}>
                            <span>Member since</span>
                            <b>May 2020</b>
                        </div>
                    </div>
                    <div className={`${styleProfile["left-content"]} mt-3`}>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Description</b>
                                <a href="#">Edit Description</a>
                            </div>
                            <span>fnuwehjfiowejrfiowej</span>
                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Language</b>
                                <a href="#">Add New</a>
                            </div>
                            <span>fnuwehjfiowejrfiowej</span>
                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Linked Account</b>
                            </div>
                            <ul>
                                <li>Facebook</li> 
                                <li>Google</li> 
                                <li>Gribbble</li> 
                                <li>Stack Overflow</li> 
                                <li>GitHub</li> 
                                <li>Vimeo</li> 
                                <li>Twitter</li> 
                            </ul>


                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Skills</b>
                                <a href="#">Add New</a>
                            </div>
                            <span>fnuwehjfiowejrfiowej</span>
                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Education</b>
                                <a href="#">Add New</a>
                            </div>
                            <span>fnuwehjfiowejrfiowej</span>
                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Certification</b>
                                <a href="#">Add New</a>
                            </div>
                            <span>fnuwehjfiowejrfiowej</span>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={styleProfile["pd-right"]}></div>
            </div>

        </div>
    )
}
