import { useEffect, useState } from "react";
import { styles } from "../../styles/style";
import { useGetCollectionsQuery } from "../../redux/features/Collections/collectionsApi";
import { useCreateGoodieMutation } from "../../redux/features/goodies/goodiesApi";
import { toast } from "react-toastify";
import { boolean } from "yup";
import { redirect } from "next/navigation";
import { useGetSizesQuery } from "../../redux/features/Sizes/sizesApi";

type Props = {};

const CreateGoodie = (props: Props) => {
  const [
    createGoodie,
    { isLoading, isSuccess, error }
  ] = useCreateGoodieMutation();

  useEffect(() => {
    if (isSuccess) {
      // toast.success(
      //   <div style={{ color: "#131010", backgroundColor: "green" }}>
      //     success
      //   </div>,
      //   {
      //     icon: "🌐",
      //     style: { textAlign: "center" }
      //   }
      // );
      redirect("/admin/list-goodies");
    }
    if (error) {
      const errorMessage = error as any;
      toast.error(
        <div style={{ color: "#131010", backgroundColor: "green" }}>
          {errorMessage.data.message}
        </div>,
        {
          icon: "🌐",
          style: { textAlign: "center" }
        }
      );
    }
  });

  const [dragging, setDragging] = useState(false);
  const { data } = useGetCollectionsQuery({});
  const { data: dataSizes } = useGetSizesQuery({});
  const [collections, setCollections] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [images, setImages] = useState([]);

  const [goodieInfo, setGoodieInfo] = useState({
    name: "",
    description: "",
    slug: "",
    fromCollection: "",
    promoPercentage: "",
    price: "",
    inPromo: true || false,
    views: "",
    size: "",
    images: [{}],
    availableColors: [""],
    backgroundColors: [""],
    likes: "",
    show: true || false
  });
  useEffect(
    () => {
      if (data) {
        setCollections(data.message);
        console.log("voici les data de la collection", data);
      }
    },
    [data]
  );

  useEffect(() => {
    if (dataSizes) {
      setSizes(dataSizes.message);
      console.log("voici les data de sizes", dataSizes);
    }
  }, dataSizes);

  const handleFileChange = (e: any) => {
    const fileList = Array.from(e.target.files);
    const imageList: any = [];

    fileList.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        console.log("Le read result", reader.result);
        imageList.push(reader.result);
        if (imageList.length === fileList.length) {
          setGoodieInfo({ ...goodieInfo, images: imageList });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleGoodieCreate = async (e: any) => {
    const data = goodieInfo;
    console.log("Les donne du goodie a cree sont ", data);
    if (!isLoading) {
      await createGoodie(data);
    }
  };

  return (
    <div className="flex  w-full min-h-screen py-10 justify-center items-center">
      <div className="w-[80%] h-[90%]">
        <form className="mt-24">
          <div>
            <label htmlFor="">Goodie Name</label>
            <input
              type="text"
              name=""
              required
              value={goodieInfo.name}
              onChange={(e: any) =>
                setGoodieInfo({ ...goodieInfo, name: e.target.value })}
              id="name"
              placeholder="Best goodie ever"
              className={`${styles.input}`}
            />
          </div>

          <br />

          <div className="mb-5 mt-5">
            <label className={`${styles.label}`}>Goodie Description</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={8}
              placeholder="Write something amazing ..."
              className={`${styles.input} !h-min !py-2`}
              value={goodieInfo.description}
              onChange={(e: any) =>
                setGoodieInfo({ ...goodieInfo, description: e.target.value })}
            />
          </div>
          <br />

          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <label className={`${styles.label}`} htmlFor="email">
                Slug
              </label>
              <input
                type="text"
                required
                name=""
                value={goodieInfo.slug}
                onChange={(e: any) =>
                  setGoodieInfo({ ...goodieInfo, slug: e.target.value })}
                id="slug"
                placeholder="MERN,Next 13,Socket io,tailwind css,LMS"
                className={`
            ${styles.input}`}
              />
            </div>
            <div className="w-[50%]">
              <label className={`${styles.label} w-[50%]`}>
                Our collection
              </label>
              <select
                name=""
                id="collection"
                className={`${styles.input}`}
                value={goodieInfo.fromCollection}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    fromCollection: e.target.value
                  })}
              >
                <option value="">Select Collection</option>
                {collections &&
                  collections.map((item: any) =>
                    <option value={item._id} key={item._id}>
                      {item.title}
                    </option>
                  )}
              </select>
            </div>
          </div>

          <br />

          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <label className={`${styles.label}`}>Price</label>
              <input
                type="number"
                name=""
                required
                value={goodieInfo.price}
                onChange={(e: any) =>
                  setGoodieInfo({ ...goodieInfo, price: e.target.value })}
                id="price"
                placeholder="29"
                className={`
            ${styles.input}`}
              />
            </div>
            <div className="w-[50%]">
              <label className={`${styles.label} w-[50%]`}>
                Promon percentage
              </label>
              <input
                type="number"
                name=""
                value={goodieInfo.promoPercentage}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    promoPercentage: e.target.value
                  })}
                id="Pro percentage"
                placeholder="79"
                className={`
            ${styles.input}`}
              />
            </div>
          </div>
          <br />

          <div className="w-full flex justify-between">
            <div className="w-[100%]">
              <label className={`${styles.label}`}>Views</label>
              <input
                type="number"
                name="views"
                required
                value={goodieInfo.views}
                onChange={(e: any) =>
                  setGoodieInfo({ ...goodieInfo, views: e.target.value })}
                id="views"
                placeholder="29"
                className={`
            ${styles.input}`}
              />
            </div>
          </div>
          <br />

          <div className="w-full flex justify-between">
            <div className="w-[50%]">
              <label className={`${styles.label}`}>availableColors</label>
              <input
                type="text"
                name="availableColors"
                required
                value={goodieInfo.availableColors}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    availableColors: [e.target.value]
                  })}
                id="availableColors"
                placeholder="29"
                className={`
            ${styles.input}`}
              />
            </div>
            <div className="w-[45%]">
              <label className={`${styles.label} w-[50%]`}>
                backgroundColors
              </label>
              <input
                type="text"
                name=""
                value={goodieInfo.backgroundColors}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    backgroundColors: [e.target.value]
                  })}
                id="backgroundColors"
                placeholder="79"
                className={`
            ${styles.input}`}
              />
            </div>
          </div>

          <br />

          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <label className={`${styles.label}`}>Show</label>
              <select
                name=""
                id=""
                className={`${styles.input}`}
                value={goodieInfo.show}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    show: e.target.value === "true"
                  })}
              >
                <option value="true">True</option>
                <option value="False">False</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label className={`${styles.label} w-[50%]`}>In promo</label>
              <select
                name=""
                id=""
                className={`${styles.input}`}
                value={goodieInfo.inPromo}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    inPromo: e.target.value === "true"
                  })}
              >
                <option value="true">True</option>
                <option value="False">False</option>
              </select>
            </div>
          </div>

          <br />

          <div className="w-full">
            <input
              type="file"
              accept="image/*"
              id="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${dragging
                ? "bg-blue-500"
                : "bg-transparent"}`}
            >
              <span className="text-black dark:text-white">
                Drag and drop your thumbnail here or click to browse
              </span>
            </label>

            {goodieInfo.images.map((image, index) =>
              <div key={index} className="mt-5">
                <img
                  src={image}
                  alt={`Image ${image}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain"
                  }}
                />
              </div>
            )}
          </div>

          <br />

          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <label className={`${styles.label}`}>Likes</label>
              <input
                type="number"
                name=""
                required
                value={goodieInfo.likes}
                onChange={(e: any) =>
                  setGoodieInfo({ ...goodieInfo, likes: e.target.value })}
                id="likes"
                placeholder="29"
                className={`
            ${styles.input}`}
              />
            </div>
            <div className="w-[50%]">
              <label className={`${styles.label} w-[50%]`}>Our Sizes</label>
              <select
                name=""
                id="Size"
                className={`${styles.input}`}
                value={goodieInfo.size}
                onChange={(e: any) =>
                  setGoodieInfo({
                    ...goodieInfo,
                    size: e.target.value
                  })}
              >
                <option value="">Select Size</option>
                {sizes &&
                  sizes.map((item: any) =>
                    <option value={item._id} key={item._id}>
                      {item.size}
                    </option>
                  )}
              </select>
            </div>
          </div>

          <div
            className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
            onClick={handleGoodieCreate}
          >
            Create
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGoodie;
