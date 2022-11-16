import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1.png';
import Image2 from 'assets/img/team-2.png';
import Image3 from 'assets/img/team-3.png';
// import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48 ">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Our Team">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </Title>
                <div className="flex flex-wrap justify-center">
                    <TeamCard
                        img={Image1}
                        name="Hetansh Shah"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image2}
                        name="Krish Shah"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image3}
                        name="Aditya Kulkarni"
                        position="Web Developer"
                    />
                    {/* <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    /> */}
                </div>
            </div>
        </section>
    );
}
