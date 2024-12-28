import BlogTopics from "./components/card";
import Footer from "./components/footer";
import Main from "./components/main";

export default function Home(){
    return(
        <div>
            <Main />
            <div id="blog-topic">
            <BlogTopics />
            </div>
            <Footer />
        </div>
    )
}