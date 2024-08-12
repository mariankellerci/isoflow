/* eslint-disable import/no-extraneous-dependencies */
import { Colors, Icons, InitialData } from 'src/Isoflow';

export const colors: Colors = [
  {
    id: 'color1',
    value: '#a5b8f3'
  },
  {
    id: 'color2',
    value: '#bbadfb'
  },
  {
    id: 'color3',
    value: '#f4eb8e'
  },
  {
    id: 'color4',
    value: '#f0aca9'
  },
  {
    id: 'color5',
    value: '#fad6ac'
  },
  {
    id: 'color6',
    value: '#a8dc9d'
  },
  {
    id: 'color7',
    value: '#b3e5e3'
  }
];

export const icons: Icons = [
  {
    id: 'battery',
    name: 'battery',
    url: '../assets/isoicons/battery.png',
    isIsometric: true
  },
  {
    id: 'biogas',
    name: 'biogas',
    url: '../assets/isoicons/biogas.png',
    isIsometric: true
  },
  {
    id: 'hvgrid',
    name: 'hvgrid',
    url: '../assets/isoicons/hvgrid.png',
    isIsometric: true
  },
  {
    id: 'solar',
    name: 'solar',
    url: '../assets/isoicons/solar.png',
    isIsometric: true
  },
  {
    id: 'substation',
    name: 'substation',
    url: '../assets/isoicons/substation.png',
    isIsometric: true
  },
  {
    id: 'water',
    name: 'water',
    url: '../assets/isoicons/water.png',
    isIsometric: true
  },
  {
    id: 'wheatmill',
    name: 'wheatmill',
    url: '../assets/isoicons/wheatmill.png',
    isIsometric: true
  },
  {
    id: 'wind',
    name: 'wind',
    url: '../assets/isoicons/wind.png',
    isIsometric: true
  }
];

//  export const icons: Icons = isopacks;

export const initialData: InitialData = {
  title: 'Bühler & Scherler Energiekonfigurator',
  icons,
  colors,
  items: [
    {
      id: '4a9d71a9-f9d1-4e38-9bf5-b092215400eb',
      name: 'Untitled',
      icon: 'biogas'
    },
    {
      id: '9a50b3fb-8423-4c99-943d-1e68b5d3cf2a',
      name: 'Biogas',
      icon: 'biogas'
    },
    {
      id: 'c4e7dd98-561b-497a-b54f-0013a3d91295',
      name: 'Getreidemühle',
      icon: 'wheatmill'
    },
    {
      id: '3474ac0a-e20b-4483-b2c5-744e0cc69fba',
      name: 'Energiemanagement',
      icon: 'substation'
    },
    {
      id: '00ce2a2d-e299-463e-804d-afc618d4e182',
      name: 'HV 110 kV',
      icon: 'hvgrid'
    },
    {
      id: '2b1a7c44-9269-4717-a6d2-704703621eca',
      name: 'Flusswasserkraft',
      icon: 'water'
    },
    {
      id: '4fd1206f-96ed-469f-a630-dbcad9355e60',
      name: 'Windkraft',
      icon: 'wind'
    },
    {
      id: 'f80241ab-3a09-4cd8-b598-5c80c49d4dc9',
      name: 'Solar',
      icon: 'solar'
    },
    {
      id: '7437dd81-13bc-4ca6-9889-8ed96dc49a0a',
      name: 'Batteriespeicher',
      icon: 'battery'
    }
  ],
  views: [
    {
      name: 'Untitled view',
      items: [
        {
          labelHeight: 80,
          id: '7437dd81-13bc-4ca6-9889-8ed96dc49a0a',
          tile: {
            x: 4,
            y: 0
          }
        },
        {
          labelHeight: 80,
          id: 'f80241ab-3a09-4cd8-b598-5c80c49d4dc9',
          tile: {
            x: 9,
            y: -1
          }
        },
        {
          labelHeight: 80,
          id: '4fd1206f-96ed-469f-a630-dbcad9355e60',
          tile: {
            x: 8,
            y: 0
          }
        },
        {
          labelHeight: 80,
          id: '2b1a7c44-9269-4717-a6d2-704703621eca',
          tile: {
            x: 7,
            y: 1
          }
        },
        {
          labelHeight: 80,
          id: '00ce2a2d-e299-463e-804d-afc618d4e182',
          tile: {
            x: 2,
            y: 6
          }
        },
        {
          labelHeight: 80,
          id: '3474ac0a-e20b-4483-b2c5-744e0cc69fba',
          tile: {
            x: 2,
            y: 2
          }
        },
        {
          labelHeight: 80,
          id: 'c4e7dd98-561b-497a-b54f-0013a3d91295',
          tile: {
            x: -2,
            y: -2
          }
        },
        {
          labelHeight: 80,
          id: '9a50b3fb-8423-4c99-943d-1e68b5d3cf2a',
          tile: {
            x: 6,
            y: 2
          }
        }
      ],
      connectors: [
        {
          id: '482b8d55-3e56-455c-8be9-fedff4a29777',
          color: 'color1',
          anchors: [
            {
              id: 'c81373a8-3983-4109-91b1-f9f0d4faad42',
              ref: {
                item: '3474ac0a-e20b-4483-b2c5-744e0cc69fba'
              }
            },
            {
              id: 'd915e08f-d824-4c12-8677-dcea6b90d83a',
              ref: {
                item: 'c4e7dd98-561b-497a-b54f-0013a3d91295'
              }
            }
          ]
        },
        {
          id: '690aba6f-4a04-469f-8237-71dc803603d2',
          color: 'color1',
          anchors: [
            {
              id: 'd882fd3f-cad8-4720-8fbe-2d0ad0f29c95',
              ref: {
                item: 'f80241ab-3a09-4cd8-b598-5c80c49d4dc9'
              }
            },
            {
              id: '4bd377c4-5b09-4d9f-9e84-0c7dbdc5db1f',
              ref: {
                tile: {
                  x: 7,
                  y: -3
                }
              }
            },
            {
              id: '82277256-20da-4fa3-ae60-4dec32cb8fed',
              ref: {
                tile: {
                  x: 5,
                  y: -3
                }
              }
            },
            {
              id: 'b1687e0f-232d-4ab1-be97-b8f443f16651',
              ref: {
                item: '7437dd81-13bc-4ca6-9889-8ed96dc49a0a'
              }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '251d4c3a-3f96-43db-82ee-45295ac7b1e3',
          color: 'color1',
          anchors: [
            {
              id: '8634c2f9-d09c-42bb-bf26-fbec35c87d68',
              ref: {
                item: '2b1a7c44-9269-4717-a6d2-704703621eca'
              }
            },
            {
              id: '869dee18-52e1-4a97-a982-13796552899d',
              ref: {
                item: '7437dd81-13bc-4ca6-9889-8ed96dc49a0a'
              }
            }
          ]
        },
        {
          id: 'c35126d9-3153-441b-ba79-2c9f03462068',
          color: 'color1',
          anchors: [
            {
              id: '8449e5f9-112c-4cac-a479-8e8fd39fff10',
              ref: {
                item: '9a50b3fb-8423-4c99-943d-1e68b5d3cf2a'
              }
            },
            {
              id: 'b3c909e3-fb0c-4784-9620-962766b9dd5c',
              ref: {
                item: '7437dd81-13bc-4ca6-9889-8ed96dc49a0a'
              }
            }
          ]
        },
        {
          id: 'c7f11880-a77b-4c5d-8b4a-1ccb13590e2f',
          color: 'color1',
          anchors: [
            {
              id: '9e29c2a7-a2a9-4e87-b8fb-662ce30255a6',
              ref: {
                item: '7437dd81-13bc-4ca6-9889-8ed96dc49a0a'
              }
            },
            {
              id: 'b1a263a2-8f76-4ace-af26-9be2490a7d11',
              ref: {
                item: '3474ac0a-e20b-4483-b2c5-744e0cc69fba'
              }
            }
          ]
        },
        {
          id: '745ac3cf-47b6-40f4-a865-eee57b819b51',
          color: 'color1',
          anchors: [
            {
              id: '46073e29-5310-4ba2-a3df-1cb0833b4020',
              ref: {
                item: '00ce2a2d-e299-463e-804d-afc618d4e182'
              }
            },
            {
              id: 'bab7630c-5d18-4a49-9a1f-1e687ace9d28',
              ref: {
                item: '3474ac0a-e20b-4483-b2c5-744e0cc69fba'
              }
            }
          ]
        }
      ],
      rectangles: [],
      textBoxes: [],
      id: '7746fa8d-bbd8-4e11-8fc1-e5310460bfb3',
      lastUpdated: '2024-08-12T11:44:20.905Z'
    }
  ]
};
