import img2ozeltk from "../assets/images/ozeltakim/img2ozeltk.png";
import img3ozeltk from "../assets/images/ozeltakim/img3ozeltk.png";
import img4ozeltk from "../assets/images/ozeltakim/img4ozeltk.png";


const OzelTakim = () => {
    return (
        <section className="text-center" >
            <h1 className="font-bold text-left" >ÖZEL TAKIM</h1>
            <article className="flex flex-col gap-4" >
                <div className="grid lg:grid-cols-2 gap-2 justify-items-center items-center" >
                    <img src={img2ozeltk} alt="img2ozeltk" className="block w-full" />
                    <p className="text-justify" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde fugit reprehenderit at. Assumenda voluptas sunt quod quo. Provident, veritatis quia! Recusandae dolores officiis ducimus sapiente veniam perspiciatis tempore ipsa, eligendi animi et quas rerum voluptatum adipisci a odit voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in excepturi quas possimus quod impedit expedita non aut rerum fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam facilis dicta ratione unde sapiente culpa consequatur ea, suscipit ut in beatae sit! Laudantium voluptate est dolorum iure maxime mollitia numquam quos quibusdam voluptates ullam molestias, cum perferendis aperiam esse ducimus praesentium rem vero reprehenderit molestiae et quod, officiis eum!
                    </p>
                </div>
                <h2 className="font-bold text-left w-full" >Doğru Takım</h2>
                <div className="grid lg:grid-cols-2 gap-2 justify-items-center items-center" >
                    <ul className="text-justify list-disc list-inside" >
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae soluta earum, aliquid quis sit officiis eveniet doloribus fugiat explicabo consequatur.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium dolores vel praesentium porro excepturi accusantium maiores necessitatibus rem voluptatum.
                        </li>
                        <li>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio, libero sapiente aperiam quidem minus!
                        </li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <img src={img3ozeltk} alt="img3ozeltk" className="block w-full" />
                </div>
                <div className="flex flex-col gap-2 items-center" >
                    <img src={img4ozeltk} alt="img4ozeltk" className="block w-full" />
                    <p className="text-justify " >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque deleniti pariatur repellendus repudiandae eaque quidem. Id accusantium, suscipit ullam cum, numquam tempora quidem magni harum eos vel consequuntur, aut voluptatibus atque voluptates odit reprehenderit rem omnis inventore? Asperiores, accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, earum nulla sint quo deserunt impedit hic. Velit aspernatur consectetur nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident nam laudantium, eligendi voluptatem ad. Consequuntur rem tenetur, ipsam odit, aperiam consequatur iusto, accusantium repellendus itaque at voluptas minus placeat! Exercitationem nesciunt, labore doloremque nostrum magnam id impedit sit nihil, fuga alias quibusdam culpa praesentium sapiente esse autem voluptates debitis?
                    </p>
                </div>
            </article>
        </section>
    );
}

export default OzelTakim;