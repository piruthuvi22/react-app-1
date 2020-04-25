import React from 'react';
import ReactDOM from 'react-dom';
import Imgslider from './home';
import Cards from './cards.js';
import About from './about';
import Navbar from './navbar.js'
import Details from './details'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: "1",
                name: "Nallur Kandaswamy Temple",
                description: "He historic Kandaswamy Temple stans at Nallur 1 1/2km from Jaffna on the Point Pedro Road. The temple was built in the 15th century, the king of Kotte, who led an expedition to the North and brought Jaffna under the suzerainty of Kotte.",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/43/a0/61/nallur-kovil-jaffnamost.jpg"
            },
            {
                id: "2",
                name: "Sigiriya Rock",
                description: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres high",
                img: "https://travellingclaus.com/wp-content/uploads/2018/02/1a22-1.jpg"
            },
            {
                id: "3",
                name: "Shrine of Our Lady of Madhu",
                description: "The Shrine of Our Lady of Madhu is a Roman Catholic Marian shrine in Mannar district of Sri Lanka. With a history of over 400 years, this shrine acts as a center for pilgrimage and worship for Sri Lankan Catholics",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/04/89/92/66/shrine-of-our-lady-of.jpg"
            },
            {
                id: "4",
                name: "Arugam Bay Beach",
                description: "Arugam Bay, known locally as 'Arugam Kudah', is a bay situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast, and a historic settlement of the ancient Batticaloa Territory. The bay is located 117 kilometres south of Batticaloa, 320 kilometres due east of Colombo, and approximately 4 kilometres south of the market town of Pottuvil",
                img: "https://paddywaytours.com/wp-content/uploads/2017/05/stock-photo-79332449-700x466.jpg?e7068c&e7068c"
            },
            {
                id: "5",
                name: "Pinnawala Elephant Orphanage",
                description: "Pinnawala Elephant Orphanage is an orphanage, nursery and captive breeding ground for wild Asian elephants located at Pinnawala village, 13 km northeast of Kegalle town in Sabaragamuwa Province of Sri Lanka. Pinnawala has the largest herd of captive elephants in the world",
                img: "https://overatours.com/wp-content/uploads/2019/05/128-1024x683.jpg"
            },
            {
                id: "6",
                name: "Galle Face Green",
                description: "Galle Face is a 5 ha ocean-side urban park, which stretches for 500 m along the coast, in the heart of Colombo, the financial and business capital of Sri Lanka. The promenade was initially laid out in 1859 by Governor Sir Henry George Ward, although the original Galle Face Green extended over a much larger area than is seen today",
                img: "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/08/Galle-Face-Green.jpg"
            },
            {
                id: "7",
                name: "Ravana Falls",
                description: "This waterfall measures approximately 25 m (82 ft) in height and cascades from an oval-shaped concave rock outcrop. During the local wet season, the waterfall turns into what is said to resemble an areca flower with withering petals. But this is not the case in the dry season, where the flow of water reduces dramatically. The falls form part of the Ravana Ella Wildlife Sanctuary, and is located 6 km (3.7 mi) away from the local railway station at Ella",
                img: "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/09/ravana-ella.jpg"
            },
            {
                id: "8",
                name: "Viharamahadevi Park",
                description: "Viharamahadevi Park is a public park located in Cinnamon Gardens, Colombo, situated in front of the colonial-era Town Hall in Sri Lanka. It was built by the British colonial administration and is the oldest and largest park of Colombo. The park was originally named Victoria Park after Queen Victoria but was renamed after Queen Viharamahadevi, the mother of King Dutugamunu following independence",
                img: "https://www.allceylon.lk/images/location/2016/01/Viharamahadevi-Park-Colombo-1453369743.jpeg"
            },
            {
                id: "9",
                name: "Ruwanwelisaya",
                description: "The Ruwanwelisaya is a stupa and a hemispherical structure containing relics, in Sri Lanka, considered sacred to many Buddhists all over the world. Two quarts or one Drona of the Gothama Buddha's relics are enshrined in the stupa, which is the largest collection of his relics anywhere. It was built by King Dutugemunu",
                img: "https://previews.123rf.com/images/agephotography/agephotography1801/agephotography180100205/94522408-ruwanwelisaya-ruwanweli-maha-seya-stupa-anuradhapura-sri-lanka.jpg"
            },
            {
                id: "10",
                name: "Nine Arches Bridge",
                description: "The Nine Arch Bridge also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka. It is one of the best examples of colonial-era railway construction in the country. The construction of the bridge is generally attributed to a local Ceylonese builder, P. K. Appuhami, in consultation with British engineers. The chief designer and project manager of the 'upcountry railway line of Ceylon' project was D. J. Wimalasurendra, a distinguished Ceylonese engineer and inventor",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/e7/80/16/relax-lodge-ella.jpg"
            },
            {
                id: "11",
                name: "Koneswaram Temple",
                description: "Koneswaram temple of Trincomalee or Thirukonamalai Konesar Temple – The Temple of the Thousand Pillars and Dakshina-Then Kailasam is a classical-medieval Hindu temple complex in Trincomalee, a Hindu religious pilgrimage centre in Eastern Province, Sri Lanka. The most sacred of the Pancha Ishwarams of Sri Lanka, it was built significantly during the reign of the early Cholas and the Five Dravidians of the Early Pandyan Kingdom atop Konesar Malai, a promontory overlooking Trincomalee District, Gokarna bay and the Indian Ocean",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Spiritual_16.jpg"
            },
            {
                id: "12",
                name: "Galle Lighthouse",
                description: "Philippus Baldaeus, a Dutch minister who served in the area in the late 1650s, detailed his observations of Galle Harbour, in his work, Description of the East India, Malabar and Coromandel Coasts, stating that there was an iron cannon placed on the ramparts and a lantern to guide the sailors on top of the 28 feet above sea level rock which jutted out into the sea.",
                img: "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/Galle-Lighthouse.jpg"
            }]
        }
    }

    render() {

        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Imgslider />
                        <Cards info={this.state.data} />
                    </Route>

                    <Route path="/place/:id" render={({ match }) => <Details match={match} />}>
                        <Details info={this.state.data} />
                    </Route>
                    <Route path="/about" component={About} />

                </Switch>
            </Router >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister();
