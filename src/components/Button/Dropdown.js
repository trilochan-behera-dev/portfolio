import React, { FC, useEffect, useMemo, useRef, useState } from "react";


const DropDown = ({
    dataList = [],
    setSelectedValue = (d) => { },
    placeholder = "",
    showCloseBtn = false,
    reset = false,
    container = "",
    cointinerStyle = {},
    isHideExtend = false,
    extendColor = "",
    ...props
}) => {
        // There two states are used for open dropdown and set the label of dropdown.
        const [openDropDown, setOpenDropDown] = useState(false);
        const [label, setLabel] = useState("");
        const [highlightOption, setHighlightOption] = useState(-1);
        const highlightOptionref = useRef(-1);
        // this memo is used for updating label based on chang
        useMemo(() => (placeholder ? setLabel("") : null), [placeholder]);
        // This memo is used for updating the label
        useMemo(() => (props.initialSelect ? setLabel(props.initialSelect) : null), [props.initialSelect]);
        useMemo(() => (reset ? setLabel("") : null), [reset]);

        // Dropref is used for taking refernce.
        let dropRef = useRef();
        // This translation hook is used for translating label.
        // This function is used for handling change event also handle props events.
        const handleSelect = (val, label, item) => (e) => {
            e?.stopPropagation();
            setLabel(label);
            setSelectedValue(val);
            eval(props.onClick ? props.onClick(item) : null);
            eval(props.handleChange ? props.handleChange(e) : null);
            setOpenDropDown(!openDropDown);
            setHighlightOption(-1);
            highlightOptionref.current = -1;
        };
        // This use effect is used for closed the dropdown when we click outside the dropdown area.
        useEffect(() => {
            const checkIfClickedOutside = (e) => {
                if (openDropDown && dropRef.current && !dropRef.current.contains(e.target)) {
                    setOpenDropDown(false);
                    setHighlightOption(-1);
                    highlightOptionref.current = -1;
                }
            };
            document.addEventListener("click", checkIfClickedOutside);
            // This returnn state ment is used for clearing the any subscription and events.
            return () => {
                document.removeEventListener("click", checkIfClickedOutside);
            };
        }, [openDropDown]);

        return (
            <div className={`${container ? container : "bg-primary-dark rounded-full font-semibold h-full w-full flex items-center justify-center text-artisan-grey"}`} ref={dropRef} style={cointinerStyle}>
                <div className="dropdown relative w-full" ref={dropRef} id={props?.id ? props?.id : null}>
                    <button
                        className={`focus:outline-none focus:border-[2px] focus:border-artisan-dark-grey w-full h-12 pl-3 pr-3 ${props.bgColor ? props.bgColor : "bg-primary-dark"} rounded-xl font-semibold flex items-center justify-between ${props?.cursor_style ? props?.cursor_style : "cursor-pointer"
                            } relative group`}
                        onClick={(e) => setOpenDropDown(!openDropDown)}
                        tabIndex={0}
                        type="button"
                    >
                        <p
                            className={`${props.labelColor ? `${props.labelColor} text-sm pl-1 ` : "text-sm text-artisan-grey pl-2 "} ${props?.isScroll ? "whitespace-nowrap overflow-auto hide_scrollbar" : "truncate text-left w-auto"
                                } ${showCloseBtn && "pr-1"}`}
                            id="reset_dropdown_select_text"
                        >
                            {label || placeholder}
                        </p>

                        <div className="flex gap-1 items-center">
                            {/* <CircleX
                                className={` top-2 right-[26px] text-[30px] font-semibold ${props?.cursor_style ? props?.cursor_style : "cursor-pointer"} text-artisan-grey hidden group-hover:${showCloseBtn && label ? "block" : "hidden"
                                    } `}
                                onClick={(e:any) => {
                                    e?.stopPropagation();
                                    setLabel("");
                                    setSelectedValue("");
                                    eval(props.onClick ? props.onClick({ [props.label]: "", [props.value]: "" }) : null);
                                }}
                            /> */}
                            <span className={`${openDropDown ? "rotate-180" : ""} flex justify-end  ${isHideExtend ? "hidden" : "block"} `}>
                                {/* <Extend color={extendColor || "#ffffff"} /> */}
                            </span>
                        </div>
                    </button>
                    {openDropDown && (
                        <div
                            className={`${props.dropList ? props.dropList : "w-full z-10 absolute overflow-y-auto rounded-[5px] shadow-lg max-h-[260px] overflow-auto"} ${props?.isScroll ? "hide_scrollbar" : ""}`}
                            id="scrollable-div"
                        >
                            {!dataList.length ? (
                                <div className={`py-3 px-4 bg-white drop-shadow-2xl ${props?.cursor_style ? props?.cursor_style : "cursor-pointer"} hover:bg-artisan-grey-15`}>{("No Options Available")}</div>
                            ) : (
                                <div className={`${props?.isScroll ? "w-fit" : "w-full"} max-h-[260px]`}>
                                    {dataList.map((item, index) => (
                                        <div
                                            onClick={handleSelect(item[props.value], item[props.label], item)}
                                            className={`dropdown_label hover:bg-gray-400 hover:text-primary-dark focus:border-0 ${props.labelClass
                                                ? props.labelClass
                                                : `py-3 px-4 ${item[props.label] === label ? "bg-primary-dark" : "bg-primary-dark"} shadow-lg ${props?.cursor_style ? props?.cursor_style : "cursor-pointer"
                                                } hover:bg-artisan-grey-15 text-sm`
                                                }`}
                                            key={index}
                                            {...(props.id ? { id: props.id } : {})}
                                            id={"label" + index}
                                            data-name={item[props.label]}
                                            style={{
                                                backgroundColor: `${highlightOption === index || item[props.label] === label ? "" : "#EEEEEE"}`,
                                                color: `${highlightOption === index || item[props.label] === label ? "#fff" : "#000"}`,
                                            }}
                                        >
                                            {item[props.label]}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    };

export default DropDown;