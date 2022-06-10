import * as React from "react";
import { dataMenu } from "../data/datamenu";

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const liRef = React.useRef<any>(null);
  const [indexTag, setIndexTag] = React.useState<number | null>(null);
  const handleRef = (e: React.MouseEvent<HTMLLIElement>) => {
    const x = e.currentTarget.lastElementChild;

    x?.classList.toggle("open");
  };

  const handleClick = (e: number) => {
    if (indexTag == e) {
      setIndexTag(null);
    } else {
      setIndexTag(e);
    }
  };
  return (
    <div className="menu ">
      <ul className="list_item display_flex align_items_center flex_direction_col width_10_percent">
        {dataMenu &&
          dataMenu.map((value, index) => (
            <li
              ref={liRef}
              style={{ border: "1px solid blue" }}
              key={index}
              className=" padding_y_5 position_relative cursor_pointer hover_li width_100_percent "
              onClick={() => handleClick(index)}
            >
              {value.name}
              {value.subItems && (
                <ul
                  className={indexTag === index ? " s-menu open " : " s-menu "}
                >
                  {value.subItems.map((value, index) => (
                    <li
                      key={index}
                      className="padding_x_10 padding_y_5 position_relative cursor_pointer width_100_percent hover_li "
                    >
                      {value.name}
                      {value.megaSubItems && (
                        <ul className=" s-menu">
                          {value.megaSubItems.map((value, index) => (
                            <li
                              key={index}
                              className=" padding_x_10 padding_y_5 cursor_pointer width_100_percent hover_li"
                            >
                              {value.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
