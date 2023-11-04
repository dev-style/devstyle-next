import { useEffect, useState } from "react";
import { styles } from "../../styles/style";
import { useGetCollectionsQuery } from "../../redux/features/Collections/collectionsApi";

const CreateGoodie = () => {

    const [dragging, setDragging] = useState(false);
    const { data } = useGetCollectionsQuery({});
    const [collections, setCollections] = useState([]);

const [goodieInfo , setGoodieInfo] = useState({
    name:"",
    description:"",
    slug:"",
    fromCollection:"",
    promoPercentage:"",
    price:"",
    inPromo:"",
    views:"",
    size:[""],
    image:"",
    availableColors:[""],
    backgroundColors:[""],
    likes:"",
    show:""


})
useEffect(()=>{
if(data){
    setCollections(data.message)
    console.log("voici les data de la collection" , data)
}

} , [data])
  

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e: any) => {
            if (reader.readyState === 2) {
              setGoodieInfo({ ...goodieInfo, image: reader.result });
            }
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
      };
    
      const handleDragLeave = (e: any) => {
        e.preventDefault();
        setDragging(false);
      };
    
      const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);
    
        const file = e.dataTransfer.files?.[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = () => {
            setGoodieInfo({ ...goodieInfo, image: reader.result });
          };
          reader.readAsDataURL(file);
        }
      };
    

  return (
    <div className="flex  w-full min-h-screen py-10 justify-center items-center">
      <div className="w-[80%] h-[90%]">
        <form>
          <div>
            <label htmlFor="">Goodie Name</label>
            <input
              type="name"
              name=""
              required
              value=""
              onChange={(e: any) => {}}
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
              cols="30"
              rows="8"
              placeholder="Write something amazing ..."
              className={`${styles.input} !h-min !py-2`}
              value=""
              onChange={(e: any) => {}}
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
                value=""
                onChange={(e: any) => {}}
                id="tags"
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
                id=""
                className={`${styles.input}`}
                value=""
                onChange={(e: any) => {}}
              >
                <option value="">Select Collection</option>
                {collections &&
                collections.map((item: any) => (
                  <option value={item.title} key={item._id}>
                    {item.title}
                  </option>
                ))}
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
                value=""
                onChange={(e: any) => {}}
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
                value=""
                onChange={(e: any) => {}}
                id="price"
                placeholder="79"
                className={`
            ${styles.input}`}
              />
            </div>
          </div>
          <br />

          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <label className={`${styles.label}`}>Views</label>
              <input
                type="number"
                name=""
                required
                value=""
                onChange={(e: any) => {}}
                id="price"
                placeholder="29"
                className={`
            ${styles.input}`}
              />
            </div>
            <div className="w-[50%]">
              <label className={`${styles.label} w-[50%]`}>Likes</label>
              <input
                type="number"
                name=""
                value=""
                onChange={(e: any) => {}}
                id="price"
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
                value=""
                onChange={(e: any) => {}}
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
                value=""
                onChange={(e: any) => {}}
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
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {goodieInfo.image ? (
              <img
                src={goodieInfo.image}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                Drag and drop your thumbnail here or click to browse
              </span>
            )}
          </label>
        </div>

        </form>
      </div>
    </div>
  );
};

export default CreateGoodie;
