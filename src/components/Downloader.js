import React from "react";
import { useEffect } from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";



export const Downloader = () => {
    return (
        <Router>
            <div className="container pt-48">
                <div className="url-input w-full ">
                    <form action="" className="rounded px-8 ">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 text-lg font-bold px-2 mb-2 ">Video URL:</label>
                            <input className="shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="https://www.youtube.com/watch?v=videoID" />

                            <button className="block max-w-md py-4 font-medium px-8 border-2 border-purple-600 rounded mt-6  hover:bg-purple-300 bg-purple-600 hover:text-purple-600 text-white mx-auto">Download</button>

                        </div>
                    </form>
                </div>
            </div>
        </Router>
    )
}