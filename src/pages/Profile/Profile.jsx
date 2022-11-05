import React from 'react'
import { useSelector } from 'react-redux'
import styleProfile from "../../assets/css/styleProfile.module.css"

export default function Profile() {
    let { user } = useSelector((state) => state.UserReducer)
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
                                <span onClick={() => {
                                    let input = document.getElementById("desEdit")
                                    if (input.style.display === "none") {
                                        input.style.display = "block"
                                    } else input.style.display = "none"
                                }}>Edit Description</span>
                            </div>
                            <div className='des-edit' id='desEdit' style={{ display: "none" }}>
                                <textarea name="Description" id="des" cols="35" rows="3" placeholder='Add Description' defaultValue={"abc"}></textarea>
                                <span className='btn btn-danger'>Hủy</span>
                                <span className='btn btn-success ml-3'>đồng ý</span>
                            </div>


                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Language</b>
                                <span onClick={() => {
                                    let input = document.getElementById("langEdit")
                                    if (input.style.display === "none") {
                                        input.style.display = "block"
                                    } else input.style.display = "none"
                                }}>Add New</span>
                            </div>
                            <div className='lang-edit' id='langEdit' style={{ display: "none" }}>
                                <input type="text" className="form-control my-2" placeholder='Add Language'  />
                                <select className='custom-select mb-2' name="lang-sel">
                                    <option selected>Language Level</option>
                                    <option value="1">Basic</option>
                                    <option value="2">Convertation</option>
                                    <option value="3">Fluent</option>
                                    <option value="4">Navtive / Bilingual</option>
                                </select>
                                <span className='btn btn-danger'>Hủy</span>
                                <span className='btn btn-success ml-3'>đồng ý</span>
                            </div>
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
                                <span onClick={() => {
                                    let input = document.getElementById("skillEdit")
                                    if (input.style.display === "none") {
                                        input.style.display = "block"
                                    } else input.style.display = "none"
                                }}>Add New</span>
                            </div>
                            <div className='des-edit' id='skillEdit' style={{ display: "none" }}>
                                <textarea name="Description" id="des" cols="35" rows="3" placeholder='Add Skills' defaultValue={"abc"}></textarea>
                                <span className='btn btn-danger'>Hủy</span>
                                <span className='btn btn-success ml-3'>đồng ý</span>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Education</b>
                                <span onClick={() => {
                                    let input = document.getElementById("eduEdit")
                                    if (input.style.display === "none") {
                                        input.style.display = "block"
                                    } else input.style.display = "none"
                                }}>Add New</span>
                            </div>
                            <div className='des-edit' id='eduEdit' style={{ display: "none" }}>
                                <textarea name="Description" id="des" cols="35" rows="3" placeholder='Add Skills' defaultValue={"abc"}></textarea>
                                <span className='btn btn-danger'>Hủy</span>
                                <span className='btn btn-success ml-3'>đồng ý</span>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className={styleProfile["left-item"]}>
                                <b>Certification</b>
                                <span onClick={() => {
                                    let input = document.getElementById("cerEdit")
                                    if (input.style.display === "none") {
                                        input.style.display = "block"
                                    } else input.style.display = "none"
                                }}>Add New</span>
                            </div>
                            <div className='des-edit' id='cerEdit' style={{ display: "none" }}>
                                <textarea name="Description" id="des" cols="35" rows="3" placeholder='Add Skills' defaultValue={"abc"}></textarea>
                                <span className='btn btn-danger'>Hủy</span>
                                <span className='btn btn-success ml-3'>đồng ý</span>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={styleProfile["pd-right"]}></div>
            </div>

        </div>
    )
}
