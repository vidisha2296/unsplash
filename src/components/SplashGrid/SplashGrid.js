import React, { useContext, useRef,useEffect } from "react";
import "./SplashGrid.scss";
 import { UnsplashContext } from "../../context";
import useIntersectionObserver from "../../hooks/userIntersectionObserver";

export default function SplashGrid() {
   const { images } = useContext(UnsplashContext);
   console.log(images)
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef();
  // const dispatch = useDispatch()
  // const usersListData = useSelector(state => state.usersList)
  // const {loading, error, users} = usersListData
  // useEffect(() => {
  //     dispatch(getUsers()) 
  //   }, [dispatch])
    // console.log(users,'lllll')
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <section id="splashgrid" ref={ref}>
      <div className="container">
        <ul className="grid">
          {images ? (
            images.map((image) => (
              <li className="grid__item">
                {isVisible && (
                  <img
                    className="grid__image"
                    src={image.urls.regular}
                    alt=""
                  />
                )}
              </li>
            ))
          ) : (
            <h2>Loading</h2>
          )}
        </ul>
      </div>
    </section>
  );
}
