import UserLayout from "../components/layouts/UserLayout";
import Header from "../components/HomePage/Header/Header";
import ServiceList from "../components/HomePage/Services/ServiceList";
import PackageList from "../components/HomePage/Package/PackageList";
import Announcement from "../components/HomePage/Announcement";
import ShowBlog from "../components/HomePage/Blog/ShowBlog";
import General from "../middleware/General";
const packageList = [
    {
        packageImg:"static/img/home/sliders/home-hero-img3.jpg",
        packageName : "ফ্যামিলি হেলথ চেকাপ",
        packageCost:500,
        packageDescription: "পরিবারের সদস্যদের মানসিক ও শারীরিক স্বাস্থ্য সুরক্ষা ও প্রতি মাসে স্বাস্থ্য পরীক্ষার জন্য অনলাইনে একজন অভিজ্ঞ ডাক্তার সর্বদা থাকবেন। বিভিন্ন মেডিকল পার্টনারদের থেকে ক্যাশ ব্যাক , ফ্রি ওষুধ ডেলিভারি সহ নানা রকম সুবিধা পাওয়া যাবে এই প্যাকেজে।"
    },
    {
        packageImg:"static/img/home/sliders/home-hero-img3.jpg",
        packageName : "কর্পোরেট হেলথ চেকাপ",
        packageCost:600,
        packageDescription: "প্রতিমাসে  প্রতিষ্ঠানের সদস্যদের সাধারন মানসিক ও শারীরিক স্বাস্থ্য সেবা ও"
    },
    {
        packageImg:"static/img/home/sliders/home-hero-img3.jpg",
        packageName : "কর্পোরেট হেলথ চেকাপ",
        packageCost:1000,
        packageDescription: "প্রতিমাসে  প্রতিষ্ঠানের সদস্যদের সাধারন মানসিক ও শারীরিক স্বাস্থ্য সেবা ও"
    },
];
const index =  function () {
    return (
        <div>
            <Header />
            <ServiceList />
            {/*<PackageList packageList={packageList}/>*/}
            <Announcement/>
            {/*<ShowBlog/>*/}
        </div>
    )
};
export  default General(index);