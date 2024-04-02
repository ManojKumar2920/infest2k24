import {
    paperpresentation,
    projecpresentation,
    paperbanner,
    cad_master,
    fun,
    mr_mechanic,
    water_rocket
} from "../../../assets/index.js";

const MechCardContent = [
    {
        id:1,
        img:projecpresentation,
        banner:"",
        eventTitle : "Paper Presentation",
        eventDesc : "Paper presentation is an event where the participants are required to make a paper about a certain topic and then present it in front of a jury. ",
        rules:[
            " Maximum 4 members per team",
            "The paper topics can be chosen by your own.",
            "Abstract should be sent 1 week before infest2k24mech@gmail.com)",
            "Abstract should not exceed more than 250 words",
            "Abstract should be in the following format :",
            "Title- theme of the paper",
            "Names of the students and their E-mail ID’S.",
            "Name of the Institute & City.",
            "Each team is allocated a total presentation time of 10-15 minutes.",
            "Submissions must be in the form of a POWER POINT PRESENTATION(max 10 slides)",
            "Students should submit the PPT before 2 days via mail(infest2k24mech@gmail.com)"
        ],
        criteria:[
            "Problem identification and solutions to real time problems.",
            "Whether technically adoptable",
            "Delivery(Confidence, Body Language, Dynamism )"
        ]
    },
    {
        id:2,
        img:paperpresentation,
        banner:paperbanner,
        eventTitle : "Project Presentation",
        eventDesc : "Project Presentation is an event where the participants are required to make a project about a certain topic and present infront of a jury." ,
        rules:[
            " Maximum 4 members per team",
            "The Project topics shall be chosen by their own",
            "Presentation should not exceed more than 10 slides",
            'A team should present the project upto 8 minutes.'
        ],
        criteria:[
            "Whether your projects satisfy the needs of society",
            "Students Involvement and their Innovative ideas"
        ]
    },
    {
        id:3,
        img:cad_master,
        banner:"",
        eventTitle : "CAD Master",
        eventDesc : "For this CAD master students will be provided computer with autocad software installed and they should perform the assigned task.",
        rules:[
            "Maximum 2 students are allowed to participate for modelling",
            "30 Mts duration will be provided for completing the assigned task",
            "Prelims stages may be considered if more number participants is registered",
            " Usage of Phone is restricted"
        ],
        criteria:[
            " Maximum Completion of task within the duration"
        ]
    },
    {
        id:4,
        img:fun,
        eventTitle : "Fun Series",
        eventDesc : 'The students can have their fun and enjoyment in playing the series of games. Games will be an on spot event. Once you have registered you can participate in fun series games on the symposium date.',
    },
    {
        id:5,
        img:water_rocket,
        banner:"",
        eventTitle : "Watery Rocketry",
        eventDesc : "Water rocketry is a technical event in which students can use their ideas effectively and produce a pressurized water rocket.",
        rules:[
            "Accessories kit should be carried by their own",
            "Manually operated pump will be provided",
            'Only two persons are allowed.'
        ],
        criteria:[
            "Maximum the distance will decide the winner."
        ]
    },
    {
        id:6,
        img:mr_mechanic,
        banner:"",
        eventTitle : "Mr.Mechanic",
        eventDesc : "This event is completely based on technical. Students are asked to identify mechanical components or to assemble the components.",
        rules:[
            "Maximum 2 students are allowed to participate.",
            "Time duration of 15 mts will be provided.",
            "Usage of Phone is restricted."
        ],
        criteria:[
            "The more you scores on identifying or assembling the components will be decided the winner."
        ]
    },
];

export default MechCardContent;