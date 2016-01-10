/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './VenueProfile.css';
import Link from '../Link';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore'; 
import ListItem from '../ListItem';

let venues = {
"success": {
"placeAttributes": [
{
"AttributeName": "visited",
"Id": 0,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-0",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "favorited",
"Id": 1,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-1",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 6
},
{
"AttributeName": "Know someone who works their ",
"Id": 2,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-2",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 5
},
{
"AttributeName": "Make bottle service reservations",
"Id": 3,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-3",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Arrive early",
"Id": 4,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-4",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Easy door - everyone gets in ",
"Id": 5,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-5",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Tough door - plan in advance",
"Id": 6,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-6",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Bring girls",
"Id": 7,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-7",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 6
},
{
"AttributeName": "Keep your group small",
"Id": 8,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-8",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Young professional types",
"Id": 9,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-9",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Models, moguls and movie stars",
"Id": 10,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-10",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Fashionable crowd",
"Id": 11,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-11",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Hip hop  / urban ",
"Id": 12,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-12",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "International jet set ",
"Id": 13,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-13",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 5
},
{
"AttributeName": "Casual ",
"Id": 14,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-14",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Upscale ",
"Id": 15,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-15",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Where models hangout",
"Id": 16,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-16",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Fashion conscious crowd",
"Id": 17,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-17",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Tough Door - hardest clubs in nyc to get into ",
"Id": 18,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-18",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Frequented by celebrities, movie stars and the famous ",
"Id": 19,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-19",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 6
},
{
"AttributeName": "Best Monday Night Party in NYC",
"Id": 20,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-20",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Tuesday Night Party in NYC",
"Id": 21,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-21",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Best Wednesday Night Party in NYC",
"Id": 22,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-22",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Thursday Night Party in NYC",
"Id": 23,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-23",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Best Friday Night Party in NYC",
"Id": 24,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-24",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Saturday Night Party in NYC",
"Id": 25,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-25",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Best Sunday Night Party in NYC",
"Id": 26,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-26",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Best Rooftop Nightclubs and Lounges in NYC",
"Id": 27,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-27",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 6
},
{
"AttributeName": "Best Rooftop Bar in NYC",
"Id": 28,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-28",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 7
},
{
"AttributeName": "Best Meatpacking District Nightclubs",
"Id": 29,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-29",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Best Soho Nightclubs",
"Id": 30,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-30",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Lower East Side Nightclubs",
"Id": 31,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-31",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Best Nightclubs in Chelsea NYC",
"Id": 32,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-32",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Gay Nightclubs in NYC",
"Id": 33,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-33",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Best for bottle service ",
"Id": 34,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-34",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Best Lounge",
"Id": 35,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-35",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 5
},
{
"AttributeName": "Best Nightclub",
"Id": 36,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-36",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 0
},
{
"AttributeName": "House Music / EDM ",
"Id": 37,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-37",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Hip Hop",
"Id": 38,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-38",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 7
},
{
"AttributeName": "Deep House ",
"Id": 39,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-39",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Best Nightclubs in Brooklyn",
"Id": 40,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-40",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Nightclubs in Williamsburg",
"Id": 41,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-41",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Most Exclusive Clubs in NYC",
"Id": 42,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-42",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Attractive Crowd",
"Id": 43,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-43",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 0
},
{
"AttributeName": "Best Bars and Clubs for Hipsters in NYC",
"Id": 44,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-44",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "Best Clubs in Murray Hill ",
"Id": 45,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-45",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Best Clubs for Recent College Grads",
"Id": 46,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-46",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 0
},
{
"AttributeName": "Best bars in the  Lower East Side",
"Id": 47,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-47",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "Best bars in Soho",
"Id": 48,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-48",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Best bars in the East Village",
"Id": 49,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-49",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "Best bars in the West Village",
"Id": 50,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-50",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 7
},
{
"AttributeName": "Best bars in chelsea",
"Id": 51,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-51",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 6
},
{
"AttributeName": "Best bars in Gramercy ",
"Id": 52,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-52",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 5
},
{
"AttributeName": "Best bars in mid town ",
"Id": 53,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-53",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "best bars in the upper east side",
"Id": 54,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-54",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "best bars in the upper west side",
"Id": 55,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-55",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "best bars in battery park city",
"Id": 56,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-56",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "best bars in nolita",
"Id": 57,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-57",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "best bars in noho",
"Id": 58,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-58",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 0
},
{
"AttributeName": "best bars in union square ",
"Id": 59,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-59",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "best bars for a date in NYC",
"Id": 60,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-60",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "best sports bars in NYC",
"Id": 61,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-61",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 5
},
{
"AttributeName": "best cocktails in nyc ",
"Id": 62,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-62",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 1
},
{
"AttributeName": "best mixology bars in NYC",
"Id": 63,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-63",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 4
},
{
"AttributeName": "best dive bars in NYC",
"Id": 64,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-64",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "Best singles bar",
"Id": 65,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-65",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "hookup spot ",
"Id": 66,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-66",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 5
},
{
"AttributeName": "best bars in williamsburg",
"Id": 67,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-67",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 0
},
{
"AttributeName": "best bars in bushwick ",
"Id": 68,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-68",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "best nightclubs in bushwick ",
"Id": 69,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-69",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
},
{
"AttributeName": "best latin nightclubs",
"Id": 70,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-70",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 2
},
{
"AttributeName": "best african american nightclubs",
"Id": 71,
"Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.",
"Route": "category-route-71",
"CategoryIcon": "fa fa-anchor",
"Neighborhood": "Chelsea",
"VenueType": "Nightclub",
"PageTitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.",
"count": 3
}
],
"place": [
{
"Name": "venue_1",
"Id": 1,
"GooglePlacesId": "12345918181",
"Neighborhood": "neighborhood",
"Address": "123 Fake Street",
"Route": "venue_1",
"VenueType": "Nightclub"
}
]
}
};

// gets the new venues list from the store 
let getPopupState = function() {
  return AppStore.sendPopupState();
};

@withStyles(styles)
class VenueProfile extends Component {

constructor (props) {
    super(props)
    this.state =  { 
      trendingVenues: venues.success.placeAttributes, 
      number_favoriteTags: 10,
      number_CrowdTags: 5,
      number_OtherTags: 5,
      number_BestListTags: 10 
    }
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  handleClick_addTag = event =>{
      // sends popup click event to actions 
      AppActions.displayPopup(event);
  } 

  handleClick_viewMoreTags = event =>{

    switch (event[2]) {
        
        case "favoriteTag":
          this.setState({ number_favoriteTags: this.state.number_favoriteTags+10 })
          break;

        case "crowdTag":
        this.setState({ number_CrowdTags: this.state.number_CrowdTags+5 })
          break;

        case "otherTag":
          this.setState({ number_OtherTags : this.state.number_OtherTags+5 })
          break;

        case "bestListTag":
          this.setState({ number_BestListTags: this.state.number_BestListTags+10 })
          break;
      }
   } 

  onCloseModal () {

    let popState = getPopupState();

    // checks if the modal action was a close 
    // if it was a close,  then it will check for new selected venues 
    if (popState[0] == false ) {    
      this.setState({
      trendingVenues : popState[1]
      });
    }
  }

componentWillMount () {
  AppStore.addChangeListener(this.onCloseModal);
}

componentWillUnmount() {
    AppStore.removeChangeListener(this.onCloseModal);
  }

  // not sure what this context stuff is about,  need to research it 

  // static contextTypes = {
  //   onSetVenue: PropTypes.func.isRequired,
  //   onSetreviewSectionOne: PropTypes.func.isRequired,
  //   onSetreviewSectionTwo: PropTypes.func.isRequired,
  //   onSetreviewSectionThree: PropTypes.func.isRequired,
  // };

  render() {

    console.log(this.props.content.success.placeAttributes);

    const venue = 'Venue Name';
    const reviewSectionOne = 'Why People Like ';
    const reviewSectionTwo = 'What Kind of Crowd Goes to ';
    const reviewSectionThree = 'What Kind of Crowd Goes to ';
    const reviewSectionFour = ' Appears on These Best of Lists';

      let venueList_favoriteTags = [],
      venueList_CrowdTags = [],
       venueList_OtherTags = [],
       venueList_BestListTags = []; 

       // this needs to be added to some sort of view helpers file that has all my functions / methods for doing view

        // loops through data object and adds a VenueProfileItem for each Object
        // list --> an array to contain each component 
        // component --> the component that gets added for each item in the data array 
        // data --> an array of data 
        // number --> how many items from the array render initially 

        function venueListIterator(list, data , number){
          
            if (typeof data != 'undefined' ){
              data.forEach(function(item, i){
                if (i < number && item.count > 0 ){
                  list.push(<ListItem key={item.Id} item={item}/>); 
                }
            }); 
          }
        }
       
        venueListIterator(venueList_favoriteTags, this.state.trendingVenues, this.state.number_favoriteTags); 
        venueListIterator(venueList_CrowdTags, this.state.trendingVenues, this.state.number_CrowdTags); 
        venueListIterator(venueList_OtherTags, this.state.trendingVenues, this.state.number_OtherTags); 
        venueListIterator(venueList_BestListTags, this.state.trendingVenues, this.state.number_BestListTags); 

    // not sure what this context stuff is about,  need to research it 

    // this.context.onSetVenue(venue);
    // this.context.reviewSectionOne(reviewSectionOne);
    // this.context.reviewSectionTwo(reviewSectionTwo);
    // this.context.reviewSectionThree(reviewSectionThree);
    
    return (
      <div className="VenueProfile">
        <div className="VenueProfile-container">
          
          <div className="VenueProfile-MainImage">
            <h1>{venue}</h1>
            main image goes here,  not sure if I will keep a large hero image 
          </div>
          
        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>

              {venueList_favoriteTags}

                <div className="VenueProfile-ButtonContainer">
                  <button onClick={this.handleClick_viewMoreTags.bind(this, [true, 'viewMore', 'favoriteTag' ] )}> View More Tags </button> 
                  <button onClick={this.handleClick_addTag.bind(this, [true , 'addTag', 'favoriteTag', this.state.trendingVenues] )}> Add New Tag </button> 
                </div>
 
        </div>
          
          <div className="VenueProfile-ReviewSection">
              <h3>{venue+reviewSectionFour}</h3>

                {venueList_CrowdTags}

                <div className="VenueProfile-ButtonContainer">
                  <button> View More Tags </button> 
                  <button> Add New Tag </button> 
                </div>

          </div>

          <div className="VenueProfile-ReviewSection">

              <h3>{venue+reviewSectionFour}</h3>
          
                {venueList_OtherTags}

                <div className="VenueProfile-ButtonContainer">
                  <button> View More Tags </button> 
                  <button> Add New Tag </button> 
                </div>
       
          </div>

        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>
              {venueList_BestListTags}

                <div className="VenueProfile-ButtonContainer">
                  <button> View More Tags </button> 
                  <button> Add New Tag </button> 
                </div>

        </div>

          <div className="VenueProfile-ImageContainer VenueProfile-ReviewSection">
              <div className="VenueProfile-Image">image</div>
              <div className="VenueProfile-Image">image</div>
              <div className="VenueProfile-Image">image</div>
          </div>

        </div>
      </div>
    );
  }

}

export default VenueProfile;
