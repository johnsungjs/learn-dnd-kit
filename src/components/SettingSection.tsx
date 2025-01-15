import { CSSProperties } from "react";

interface SettingSectionProps {
  handleChangeFontSize: (value: number) => void;
  handleChangeFontColor: (value: string) => void;
  handleChangeTextAlign: (value: CanvasTextAlign) => void;
  handleChangeBackgroundColor: (value: string) => void;
  handleChangeBorderWidth: (value: number) => void;
  handleChangeBorderColor: (value: string) => void;
  handleChangeBorderRadius: (value: number) => void;
  handleChangeBorderStyle: (value: string) => void;
  handleChangeWidth: (value: number) => void;
  handleChangeHeight: (value: number) => void;
  handleChangePaddingTop: (value: number) => void;
  handleChangePaddingLeft: (value: number) => void;
  handleChangePaddingRight: (value: number) => void;
  handleChangePaddingBottom: (value: number) => void;
  handleChangeMarginTop: (value: number) => void;
  handleChangeMarginLeft: (value: number) => void;
  handleChangeMarginRight: (value: number) => void;
  handleChangeMarginBottom: (value: number) => void;

  currentStyle: CSSProperties;
}

export default function SettingSection({
  handleChangeFontSize,
  handleChangeFontColor,
  handleChangeTextAlign,
  handleChangeBackgroundColor,
  handleChangeBorderWidth,
  handleChangeBorderColor,
  handleChangeBorderRadius,
  handleChangeBorderStyle,
  handleChangeWidth,
  handleChangeHeight,
  handleChangePaddingTop,
  handleChangePaddingLeft,
  handleChangePaddingRight,
  handleChangePaddingBottom,
  handleChangeMarginTop,
  handleChangeMarginLeft,
  handleChangeMarginRight,
  handleChangeMarginBottom,
  currentStyle,
}: SettingSectionProps) {
  return (
    <div className="h-full">
      <div className="mt-6 border-b-2 border-t-2 border-black">Settings</div>
      <div className="px-2 pt-4 text-sm overflow-auto h-full">
        <div className="py-1 flex items-center justify-between gap-4">
          <p>Font Size</p>
          <div>
            <input
              type="number"
              value={currentStyle.fontSize}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) => handleChangeFontSize(parseInt(e.target.value))}
              onBlur={(e) => e.target.value === "" && handleChangeFontSize(14)}
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Font Color</p>
          <div>
            <input
              type="text"
              value={currentStyle.color}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) => handleChangeFontColor(e.target.value)}
              onBlur={(e) =>
                e.target.value === "" && handleChangeFontColor("transparent")
              }
            />
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Text Align</p>
          <div className="flex gap-1">
            <button
              className="px-2 bg-slate-300 rounded-full"
              onClick={() => handleChangeTextAlign("left")}
            >
              l
            </button>
            <button
              className="px-2 bg-slate-300 rounded-full"
              onClick={() => handleChangeTextAlign("center")}
            >
              m
            </button>
            <button
              className="px-2 bg-slate-300 rounded-full"
              onClick={() => handleChangeTextAlign("right")}
            >
              r
            </button>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Background Color</p>
          <div>
            <input
              type="text"
              value={currentStyle.background}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) => handleChangeBackgroundColor(e.target.value)}
              onBlur={(e) =>
                e.target.value === "" &&
                handleChangeBackgroundColor("transparent")
              }
            />
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Border Width</p>
          <div>
            <input
              type="number"
              value={currentStyle.borderWidth}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeBorderWidth(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeBorderWidth(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Border Color</p>
          <div>
            <input
              type="text"
              value={currentStyle.borderColor}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) => handleChangeBorderColor(e.target.value)}
              onBlur={(e) =>
                e.target.value === "" && handleChangeBorderColor("transparent")
              }
            />
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Border Radius</p>
          <div>
            <input
              type="number"
              value={currentStyle.borderRadius}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeBorderRadius(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeBorderRadius(0)
              }
            />
            <span>px</span>
          </div>
        </div>


        <div className="py-1 flex items-center justify-between gap-4">
          <p>Border Style</p>
          <div>
            <input
              type="text"
              value={currentStyle.borderStyle}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) => handleChangeBorderStyle(e.target.value)}
              onBlur={(e) =>
                e.target.value === "" &&
                handleChangeBorderStyle("transparent")
              }
            />
          </div>
        </div>


        <div className="py-1 flex items-center justify-between gap-4">
          <p>Width</p>
          <div>
            <input
              type="number"
              value={currentStyle.width}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeWidth(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeWidth(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Height</p>
          <div>
            <input
              type="number"
              value={currentStyle.height}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeHeight(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeHeight(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Padding Top</p>
          <div>
            <input
              type="number"
              value={currentStyle.paddingTop}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangePaddingTop(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangePaddingTop(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Padding Bottom</p>
          <div>
            <input
              type="number"
              value={currentStyle.paddingBottom}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangePaddingBottom(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangePaddingBottom(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Padding Left</p>
          <div>
            <input
              type="number"
              value={currentStyle.paddingLeft}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangePaddingLeft(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangePaddingLeft(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Padding Right</p>
          <div>
            <input
              type="number"
              value={currentStyle.paddingRight}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangePaddingRight(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangePaddingRight(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Margin Top</p>
          <div>
            <input
              type="number"
              value={currentStyle.marginTop}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeMarginTop(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeMarginTop(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Margin Bottom</p>
          <div>
            <input
              type="number"
              value={currentStyle.marginBottom}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeMarginBottom(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeMarginBottom(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Margin Left</p>
          <div>
            <input
              type="number"
              value={currentStyle.marginLeft}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeMarginLeft(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeMarginLeft(0)
              }
            />
            <span>px</span>
          </div>
        </div>

        <div className="py-1 flex items-center justify-between gap-4">
          <p>Margin Right</p>
          <div>
            <input
              type="number"
              value={currentStyle.marginRight}
              className="p-1 w-[60px] bg-transparent border border-[#CCCCCC]"
              onChange={(e) =>
                handleChangeMarginRight(parseInt(e.target.value))
              }
              onBlur={(e) =>
                e.target.value === "" && handleChangeMarginRight(0)
              }
            />
            <span>px</span>
          </div>
        </div>


        <div>Font Family (Pending)</div>
      </div>
    </div>
  );
}
