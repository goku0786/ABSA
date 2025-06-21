import React from "react";
import happy from "../assets/happy.png";
import sad from "../assets/sad.png";
import confused from "../assets/confused.png";
import battery from "../assets/battery.png";
import camera from "../assets/camera.png";
import design from "../assets/design.png";
import display from "../assets/display.png";
import performance from "../assets/performancee.png";

const Card = ({ aspect, sentiment }) => {
    const getAspectDisplay = (aspect, sentiment) => {
        return aspect === "battery"
            ? <div className="flex items-center gap-3">Battery  <span><img src={battery} alt="happy" className="w-10 h-10" /></span></div>
            : aspect === "camera"
                ? <div className="flex items-center gap-3">Camera  <span><img src={camera} alt="happy" className="w-10 h-10" /></span></div>
                : aspect === "performance"
                    ? <div className="flex items-center gap-3">Performance  <span><img src={performance} alt="happy" className="w-10 h-10" /></span></div>
                    : aspect === "display"
                        ? <div className="flex items-center gap-3" >Display  <span><img src={display} alt="happy" className="w-10 h-10" /></span></div>
                        : aspect === "design"
                            ? <div className="flex items-center gap-3">Design <span><img src={design} alt="happy" className="w-10 h-10" /></span></div>
                            : `Unknown Aspect`;
    };

    const getSentimentDisplay = (sentiment) => {
        return sentiment === "positive"
            ? <div className="flex items-center  gap-2 "><span><img src={happy} alt="happy" className="w-10 h-10" /></span> Positive</div>
            : sentiment === "negative"
                ? <div className="flex items-center gap-2"><span>
                    <img src={sad} alt="happy" className="w-10 h-10" />
                </span> Negative</div>
                : <div className="flex items-center gap-2"><span>
                    <img src={confused} alt="happy" className="w-10 h-10" />
                </span> Neutral</div>;
    };

    return (
        <div className="flex justify-between items-center   rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5  bg-white opacity-90 ">
            <div className=" ">
                <span className="text-lg font-bold" >{getAspectDisplay(aspect, sentiment)}</span>
            </div>

            <div
                className={`text-lg font-bold w-1/3  ${sentiment === "positive"
                    ? "text-green-500"
                    : sentiment === "negative"
                        ? "text-red-500"
                        : "text-blue-500"
                    } flex items-center`}
            >
                <span className="mr-2">{getSentimentDisplay(sentiment)}</span>
            </div>
        </div>
    );
};

export default Card;
