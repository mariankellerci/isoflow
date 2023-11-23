/* eslint-disable import/no-extraneous-dependencies */
import { Colors, Icons, InitialData } from 'src/Isoflow';
import { flattenCollections } from '@isoflow/isopacks/dist/utils';
import isoflowIsopack from '@isoflow/isopacks/dist/isoflow';
import awsIsopack from '@isoflow/isopacks/dist/aws';
import gcpIsopack from '@isoflow/isopacks/dist/gcp';
import azureIsopack from '@isoflow/isopacks/dist/azure';
import kubernetesIsopack from '@isoflow/isopacks/dist/kubernetes';

const isopacks = flattenCollections([
  isoflowIsopack,
  awsIsopack,
  azureIsopack,
  gcpIsopack,
  kubernetesIsopack
]);

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

export const icons: Icons = isopacks;

export const initialData: InitialData = {
  version: '1.0.12',
  title: 'Airport management software system',
  icons,
  colors,
  items: [
    {
      id: 'item1',
      name: 'Airport Operational Database',
      icon: 'storage',
      description:
        '<p>Each airport has its own central database that stores and updates all necessary data regarding daily flights, seasonal schedules, available resources, and other flight-related information, like billing data and flight fees. AODB is a key feature for the functioning of an airport.</p><p><br></p><p>This database is connected to the rest of the airport modules: <em>airport information systems, revenue management systems, and air traffic management</em>.</p><p><br></p><p>The system can supply different information for different segments of users: passengers, airport staff, crew, or members of specific departments, authorities, business partners, or police.</p><p><br></p><p>AODB represents the information on a graphical display.</p><p><br></p><p><strong>AODB functions include:</strong></p><p>- Reference-data processing</p><p>- Seasonal scheduling</p><p>- Daily flight schedule processing</p><p>- Processing of payments</p>'
    },
    {
      id: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92',
      name: 'Landside operations',
      icon: 'office',
      description:
        '<p>This subsystem is aimed at serving passengers and maintenance of terminal buildings, parking facilities, and vehicular traffic circular drives. Passenger operations include baggage handling and tagging.</p>'
    },
    {
      id: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f',
      name: 'Passenger facilitation services',
      icon: 'user',
      description:
        '<p>Includes passenger processing (check-in, boarding, border control) and baggage handling (tagging, dropping and handling). They follow passengers to the shuttle buses to carry them to their flights. Arrival operations include boarding control and baggage handling.</p>'
    },
    {
      id: 'a147b06a-324a-47ab-9e16-ac9101aa3d28',
      name: 'Border control (customs and security services)',
      icon: 'block',
      description:
        '<p>In airports, security services usually unite perimeter security, terminal security, and border controls. These services require biometric authentication and integration into government systems to allow a customs officer to view the status of a passenger.</p>'
    },
    {
      id: '4a27ed88-abf2-448b-af07-5d2b6ebdb67f',
      name: 'Common use services (self-service check-in systems)',
      icon: 'block',
      description:
        '<p>An airport must ensure smooth passenger flow. Various&nbsp;digital self-services, like check-in kiosks or automated self-service gates, make it happen. Self-service options, especially check-in kiosks, remain popular. Worldwide in 2018, passengers used kiosks to check themselves in&nbsp;88 percent of the time.</p>'
    },
    {
      id: 'c54ab120-44d2-46d2-9fc1-efd83ab67307',
      name: 'Baggage handling',
      icon: 'block',
      description:
        '<p>A passenger must check a bag before it’s loaded on the aircraft. The time the baggage is loaded is displayed and tracked until the destination is reached and the bag is returned to the owners.</p>'
    },
    {
      id: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05',
      name: 'Terminal management systems',
      icon: 'function-module',
      description:
        '<p>Includes maintenance and monitoring of management systems for assets, buildings, electrical grids, environmental systems, and vertical transportation organization. It also facilitates staff communications and management.</p>'
    },
    {
      id: '040dfb11-f920-48cf-bf96-64234db1b7e8',
      name: 'Maintenance and monitoring',
      icon: 'block'
    },
    {
      id: 'a71d7911-261d-4b6e-895a-27765baf0403',
      name: 'Resource management',
      icon: 'block'
    },
    {
      id: '67895813-ac6f-4dd4-9ae2-e994e9a5aa09',
      name: 'Staff management',
      icon: 'block',
      description:
        '<p>Staff modules provide the necessary information about ongoing processes in the airport, such as data on flights (in ICAO or UTC formats) and other important events to keep responsible staff members updated. Information is distributed through the airport radio system, or displayed on a PC connected via the airport LAN or on mobile devices.</p>'
    },
    {
      id: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a',
      name: 'Information management',
      icon: 'queue',
      description:
        '<p>This subsystem is responsible for the collection and distribution of daily flight information, storing of seasonal and arrival/departure information, as well as the connection with airlines.</p>'
    },
    {
      id: '00ff4dc0-09f9-4932-aa90-6c207da2989b',
      name: 'Public address (PA) systems',
      icon: 'block',
      description:
        '<p>Informs passengers and airport staff about any changes and processes of importance, for instance, gates, times of arrival, calls, and alerts. Also, information can be communicated to pilots, aircraft staff, crew, etc. PA systems usually include voice messages broadcasted through loudspeakers.</p>'
    },
    {
      id: '791abb72-5481-4713-88a8-a9fe51cb5408',
      name: 'Flight Information Display Systems (FIDS)',
      icon: 'block',
      description:
        '<p>Exhibits the status of boarding, gates, aircraft, flight number, and other flight details.&nbsp;A computer controls the screens that are connected to the data management systems and displays up-to-date information about flights in real time. Some airports have a digital FIDS in the form of apps or on their websites. Also, the displays may show other public information such as the weather, news, safety messages, menus, and advertising. Airports can choose the type, languages, and means of entering the information, whether it be manually or loaded from a central database.</p>'
    },
    {
      id: 'fe621de2-793b-42f9-968e-4cac33b8d5fe',
      name: 'Automatic Terminal Information Service (ATIS)',
      icon: 'block',
      description:
        '<p>Broadcasts the weather reports, the condition of the runway, or other local information for pilots and crews.</p><p><br></p><p>Some airport software vendors offer off-the-shelf solutions to facilitate particular tasks, like maintenance, or airport operations. However, most of them provide integrated systems that comprise modules for several operations.</p>'
    },
    {
      id: '24d4a8b3-6056-4c3f-8f0b-143683509438',
      name: 'Airside operations',
      icon: 'plane',
      description:
        '<p>Includes systems to handle aircraft landing and navigation, airport traffic management, runway management, and ground handling safety.</p>'
    },
    {
      id: '2ac34480-95cc-4b01-8efd-683ec46fcd68',
      name: 'Apron handling',
      icon: 'block',
      description:
        '<p>Apron (or ground handling) deals with aircraft servicing. This includes passenger boarding and guidance, cargo and mail loading, and apron services. Apron services include aircraft guiding, cleaning, drainage, deicing, catering, and fueling. At this stage, the software facilitates dealing with information about the weight of the baggage and cargo load, number of passengers, boarding bridges parking, and the ground services that must be supplied to the aircraft. By entering this information into the system, their costs can be calculated and invoiced through the billing system.</p>'
    },
    {
      id: '9172d115-93ae-4e89-bd75-4979b7f8a49a',
      name: 'ATC Tower',
      icon: 'block',
      description:
        '<p>The Air Traffic Control Tower is a structure that delivers air and ground control of the aircraft. It ensures safety by guiding and navigating the vehicles and aircraft. It is performed by way of visual signaling, radar, and radio communication in the air and on the ground. The main focus of the tower is to make sure that all aircraft have been assigned to the right place, that passengers aren’t at risk, and that the aircraft will have a suitable passenger boarding bridge allocated on the apron.</p><p><br></p><p>The ATC tower has a control room that serves as a channel between landside (terminal) and airside operations in airports. The control room personnel are tasked with ensuring the security and safety of the passengers as well as ground handling. Usually, a control room has CCTV monitors and air traffic control systems that maintain the order in the terminal and on the apron.</p>'
    },
    {
      id: '2db4a232-2cf3-4277-9cd4-e2c0a35a4eac',
      name: 'Aeronautical Fixed Telecommunication Network (AFTN) Systems',
      icon: 'block',
      description:
        '<p>AFTN systems handle communication and exchange of data including navigation services. Usually, airports exchange traffic environment messages, safety messages, information about the weather, geographic material, disruptions, etc. They serve as communication between airports and aircraft.</p><p><br></p><p>Software for aeronautical telecommunications stores flight plans and flight information, entered in ICAO format and UTC. The information stored can be used for planning and statistical purposes. For airports, it’s important to understand the aircraft type and its weight to assign it to the right place on the runway. AFTN systems hold the following information:</p><p><br></p><p>- Aircraft registration</p><p>- Runway used</p><p>- Actual time of landing and departure</p><p>- Number of circuits</p><p>- Number and type of approaches</p><p>- New estimates of arrival and departure</p><p>- New flight information</p><p><br></p><p>Air traffic management is performed from an ATC tower.</p>'
    },
    {
      id: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869',
      name: 'Invoicing and billing',
      icon: 'paymentcard',
      description:
        '<p>Each flight an airport handles generates a defined revenue for the airport paid by the airline operating the aircraft. Aeronautical invoicing systems make payment possible for any type and size of aircraft. It accepts payments in cash and credit in multiple currencies. The billing also extends to ATC services.</p><p><br></p><p>Depending on the aircraft type and weight and ground services provided, an airport can calculate the aeronautical fee and issue an invoice with a bill.&nbsp;It is calculated using the following data:</p><p><br></p><p>- Aircraft registration</p><p>- Parking time at the airport</p><p>- Airport point of departure and/or landing</p><p>- Times at the different points of entry or departure</p><p><br></p><p>The data is entered or integrated from ATC. Based on this information, the airport calculates the charges and sends the bills.</p>'
    },
    {
      id: 'afa7b887-8aff-45a6-86fa-7a896626e920',
      name: 'ATC Tower Billing',
      icon: 'block'
    },
    {
      id: 'd917b7d7-a5c4-479e-a366-da8d22ea8ebb',
      name: 'Non Aeronautical revenue',
      icon: 'block'
    }
  ],
  views: [
    {
      id: 'overview',
      name: 'Overview',
      items: [
        {
          labelHeight: 80,
          id: '72a5ccd3-a6ce-425d-8393-f3017c75bed2',
          tile: { x: 5, y: -11 },
          modelItem: 'd917b7d7-a5c4-479e-a366-da8d22ea8ebb'
        },
        {
          labelHeight: 80,
          id: '02817fc0-64a0-4060-9479-79bf2f038be5',
          tile: { x: 2, y: -11 },
          modelItem: 'afa7b887-8aff-45a6-86fa-7a896626e920'
        },
        {
          labelHeight: 80,
          id: 'a8f29ae3-3f48-4590-8eb1-1642cff1da98',
          tile: { x: 4, y: -7 },
          modelItem: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869'
        },
        {
          labelHeight: 80,
          id: '982aa956-ada3-452b-a55d-164c1c98d8db',
          tile: { x: 16, y: -3 },
          modelItem: '2db4a232-2cf3-4277-9cd4-e2c0a35a4eac'
        },
        {
          labelHeight: 80,
          id: '474f9d78-d1e1-4e66-846b-9c3431a65ee3',
          tile: { x: 16, y: 0 },
          modelItem: '9172d115-93ae-4e89-bd75-4979b7f8a49a'
        },
        {
          labelHeight: 80,
          id: '36c9cad3-8491-40f5-892f-2283a5456de8',
          tile: { x: 16, y: 3 },
          modelItem: '2ac34480-95cc-4b01-8efd-683ec46fcd68'
        },
        {
          labelHeight: 80,
          id: '6f37bc41-4d9b-44fb-a415-29fee0a5db64',
          tile: { x: 11, y: 0 },
          modelItem: '24d4a8b3-6056-4c3f-8f0b-143683509438'
        },
        {
          labelHeight: 80,
          id: 'f2fbf43c-eb0a-4727-80b8-540f3bc01a7d',
          tile: { x: 7, y: 12 },
          modelItem: 'fe621de2-793b-42f9-968e-4cac33b8d5fe'
        },
        {
          labelHeight: 80,
          id: '741de740-f4c4-4fca-8cf3-ac9652952e3e',
          tile: { x: 4, y: 12 },
          modelItem: '791abb72-5481-4713-88a8-a9fe51cb5408'
        },
        {
          labelHeight: 80,
          id: 'e81be8b1-b16c-4908-9068-1c2fe54fba40',
          tile: { x: 1, y: 12 },
          modelItem: '00ff4dc0-09f9-4932-aa90-6c207da2989b'
        },
        {
          labelHeight: 80,
          id: 'dca6d51e-f915-43e8-96c5-3100b62dbefb',
          tile: { x: 4, y: 6 },
          modelItem: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a'
        },
        {
          labelHeight: 80,
          id: '97152627-3f5c-4dc9-9879-6291d2c68971',
          tile: { x: -11, y: 8 },
          modelItem: '67895813-ac6f-4dd4-9ae2-e994e9a5aa09'
        },
        {
          labelHeight: 80,
          id: '64e73a9c-1826-4eb0-b51e-0e68082fdaf5',
          tile: { x: -8, y: 8 },
          modelItem: 'a71d7911-261d-4b6e-895a-27765baf0403'
        },
        {
          labelHeight: 80,
          id: 'e4703eda-1ea4-4da9-95b1-414875c06f18',
          tile: { x: -5, y: 8 },
          modelItem: '040dfb11-f920-48cf-bf96-64234db1b7e8'
        },
        {
          labelHeight: 80,
          id: '47a89a93-8f6a-4d8d-a559-e8cd332bc50a',
          tile: { x: -5, y: 4 },
          modelItem: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05'
        },
        {
          labelHeight: 80,
          id: '0108c5a7-4165-4b45-b289-5cb5a0e713d5',
          tile: { x: -11, y: -9 },
          modelItem: 'c54ab120-44d2-46d2-9fc1-efd83ab67307'
        },
        {
          labelHeight: 80,
          id: '00bdc689-a59b-4a5f-aeb4-c77c0bbaf038',
          tile: { x: -8, y: -9 },
          modelItem: '4a27ed88-abf2-448b-af07-5d2b6ebdb67f'
        },
        {
          labelHeight: 80,
          id: '62734811-2083-4ec1-b06b-8ce261acc373',
          tile: { x: -5, y: -9 },
          modelItem: 'a147b06a-324a-47ab-9e16-ac9101aa3d28'
        },
        {
          labelHeight: 180,
          id: 'fa902e5c-9026-44db-ab0c-e06bf9845987',
          tile: { x: -5, y: -4 },
          modelItem: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f'
        },
        {
          labelHeight: 180,
          id: '40465f9b-6bec-4d83-8a6f-359921793339',
          tile: { x: -4, y: 0 },
          modelItem: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92'
        },
        {
          id: '2dd7d72b-89f3-4d7e-b9ea-a81c80ba1d88',
          tile: { x: 4, y: 0 },
          labelHeight: 140,
          modelItem: 'item1'
        }
      ],
      connectors: [
        {
          id: '527b88f3-4b50-4639-9802-cfc475cd08aa',
          color: 'color6',
          anchors: [
            {
              id: 'abe857f8-6219-4030-b5cf-6a7de2bff9be',
              ref: { item: '72a5ccd3-a6ce-425d-8393-f3017c75bed2' }
            },
            {
              id: '21b9d415-1429-4e68-9b35-46705c32e8a4',
              ref: { tile: { x: 5, y: -10 } }
            },
            {
              id: '0e768e42-228d-44c5-bc30-c8d40ebb69c6',
              ref: { tile: { x: 4, y: -10 } }
            },
            {
              id: 'c9d4b849-a044-4c43-9e8a-ec370cac7dd6',
              ref: { item: 'a8f29ae3-3f48-4590-8eb1-1642cff1da98' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '073ecd08-0bff-4274-81e7-2fe35b0ac085',
          color: 'color6',
          anchors: [
            {
              id: 'aed7740d-75e5-471e-a9a0-01bbfb751a2c',
              ref: { item: '02817fc0-64a0-4060-9479-79bf2f038be5' }
            },
            {
              id: 'eccb2e42-64cd-446c-a23a-74b8f759fdd1',
              ref: { tile: { x: 2, y: -10 } }
            },
            {
              id: 'd0f7054b-54e7-45f5-9e20-2ce766611477',
              ref: { tile: { x: 4, y: -10 } }
            },
            {
              id: 'c6fa8a43-722a-49a9-84f4-b76114322b0d',
              ref: { item: 'a8f29ae3-3f48-4590-8eb1-1642cff1da98' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '170009dd-b855-4b91-ba49-07a998cf0485',
          color: 'color6',
          anchors: [
            {
              id: '24f16db1-6a3c-44b4-978d-6aa66f0b049f',
              ref: { item: 'a8f29ae3-3f48-4590-8eb1-1642cff1da98' }
            },
            {
              id: '034ffa18-b55b-4941-acd8-02dbd8c47bfb',
              ref: { item: '2dd7d72b-89f3-4d7e-b9ea-a81c80ba1d88' }
            }
          ]
        },
        {
          id: 'ae8f457f-df03-4582-925d-4c81131608fa',
          color: 'color2',
          anchors: [
            {
              id: '39a462b8-bc96-490b-849a-1199e44cfa8a',
              ref: { item: '982aa956-ada3-452b-a55d-164c1c98d8db' }
            },
            {
              id: 'f4d0339b-45c8-4eb7-a3be-94616a4969a5',
              ref: { tile: { x: 15, y: -3 } }
            },
            {
              id: '3b1bc55b-ceb2-416d-8f1d-722273180e83',
              ref: { tile: { x: 15, y: 0 } }
            },
            {
              id: '072adfbc-9888-434a-bae4-9639fff026a4',
              ref: { item: '6f37bc41-4d9b-44fb-a415-29fee0a5db64' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '4aba5eaf-e2b3-4b64-9af0-98cebafef64a',
          color: 'color2',
          anchors: [
            {
              id: '2410836d-4820-4492-8c64-d89b069ce9ec',
              ref: { item: '474f9d78-d1e1-4e66-846b-9c3431a65ee3' }
            },
            {
              id: 'f583f42d-2eec-47a5-9d45-6dfd0603cb69',
              ref: { item: '6f37bc41-4d9b-44fb-a415-29fee0a5db64' }
            }
          ]
        },
        {
          id: '5cfb2816-10cd-4c90-b584-f045c26074c8',
          color: 'color2',
          anchors: [
            {
              id: '66854e7d-e46c-49b0-8f26-186742369158',
              ref: { item: '36c9cad3-8491-40f5-892f-2283a5456de8' }
            },
            {
              id: 'ffc7345f-854c-41ef-96ed-fd1cbeb4b3d6',
              ref: { tile: { x: 15, y: 3 } }
            },
            {
              id: '93e5620a-8d94-464e-bcc4-a4b20da4b6e7',
              ref: { tile: { x: 15, y: 0 } }
            },
            {
              id: 'd97de77f-ac92-42a9-892b-3e30485817ff',
              ref: { item: '6f37bc41-4d9b-44fb-a415-29fee0a5db64' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '7392a711-e861-4c85-b394-49e47f2dd874',
          color: 'color2',
          anchors: [
            {
              id: 'bd8d118a-f676-4ca0-bfbd-b993625aece7',
              ref: { item: '6f37bc41-4d9b-44fb-a415-29fee0a5db64' }
            },
            {
              id: '613866b0-e6dd-4d8a-9a67-d8ce443273ec',
              ref: { item: '2dd7d72b-89f3-4d7e-b9ea-a81c80ba1d88' }
            }
          ]
        },
        {
          id: '1e329a8d-3fc9-40ea-8e82-67b478b35f16',
          color: 'color7',
          anchors: [
            {
              id: 'dd31d564-3b3a-4428-b05c-88b243173d21',
              ref: { item: 'f2fbf43c-eb0a-4727-80b8-540f3bc01a7d' }
            },
            {
              id: '8b9dec3b-59e3-4ddf-9a2b-12e7e6092916',
              ref: { tile: { x: 7, y: 11 } }
            },
            {
              id: '5728c55e-03b6-4faa-b801-7a342a0b7650',
              ref: { tile: { x: 4, y: 11 } }
            },
            {
              id: '3678c2f1-4c13-4959-8aaf-8d27611b6ea7',
              ref: { item: 'dca6d51e-f915-43e8-96c5-3100b62dbefb' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: 'ff1c44f2-83f8-4596-a27f-54914b7da562',
          color: 'color7',
          anchors: [
            {
              id: '30064e8e-7894-4b83-833b-a171c10327e6',
              ref: { item: '741de740-f4c4-4fca-8cf3-ac9652952e3e' }
            },
            {
              id: 'b5aabbda-2802-4cf8-90c2-adfbc5bc5b5c',
              ref: { item: 'dca6d51e-f915-43e8-96c5-3100b62dbefb' }
            }
          ]
        },
        {
          id: '8c1f03c8-351a-4a39-9570-5fd4959f0272',
          color: 'color7',
          anchors: [
            {
              id: 'e8e8c135-3852-4475-96bc-6d6ec3eef8f0',
              ref: { item: 'e81be8b1-b16c-4908-9068-1c2fe54fba40' }
            },
            {
              id: '56b0d80b-31b5-4960-bf01-47c2d2a9e90a',
              ref: { tile: { x: 1, y: 11 } }
            },
            {
              id: 'c42d6159-e6b8-447e-a197-0b7c761f2516',
              ref: { tile: { x: 4, y: 11 } }
            },
            {
              id: 'c858062e-faa9-410d-9a35-5090c3b42af5',
              ref: { item: 'dca6d51e-f915-43e8-96c5-3100b62dbefb' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '630f5788-9f0b-44df-83f9-c60e40928617',
          color: 'color7',
          anchors: [
            {
              id: 'c258cf27-4d97-4814-8438-96c7f9fa50c0',
              ref: { item: 'dca6d51e-f915-43e8-96c5-3100b62dbefb' }
            },
            {
              id: '3bdd5f99-0fc8-4b35-b2be-fa5473a51bfa',
              ref: { item: '2dd7d72b-89f3-4d7e-b9ea-a81c80ba1d88' }
            }
          ]
        },
        {
          id: '2f251ef8-d35e-4b57-ad48-dcd6f81325bc',
          color: 'color1',
          anchors: [
            {
              id: '3d0c51d0-0b90-4062-90e5-306e2aa2f633',
              ref: { item: 'e4703eda-1ea4-4da9-95b1-414875c06f18' }
            },
            {
              id: '46d83bb9-30a5-4856-afb2-0e91076fce62',
              ref: { item: '47a89a93-8f6a-4d8d-a559-e8cd332bc50a' }
            }
          ]
        },
        {
          id: '965ff8f1-59e9-45ae-b484-ba6ec4f546d0',
          color: 'color1',
          anchors: [
            {
              id: 'e031f407-88d7-4606-9d0d-99ffd12662d7',
              ref: { item: '64e73a9c-1826-4eb0-b51e-0e68082fdaf5' }
            },
            {
              id: '6bffb346-eb7e-45b7-a68f-23b49eed30c2',
              ref: { tile: { x: -8, y: 6 } }
            },
            {
              id: 'bb0fb0a7-492a-411b-8f74-9218ef607259',
              ref: { tile: { x: -5, y: 6 } }
            },
            {
              id: '4992ecf1-26bc-47bf-a781-4e5267cd0c02',
              ref: { item: '47a89a93-8f6a-4d8d-a559-e8cd332bc50a' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '3b09e7aa-97f9-40b7-81e8-84e5e610d1e2',
          color: 'color1',
          anchors: [
            {
              id: '760ef8a7-b619-41bc-a61f-3d63fa1c2879',
              ref: { item: '97152627-3f5c-4dc9-9879-6291d2c68971' }
            },
            {
              id: 'd03b1bea-d63f-4960-b186-ccc582a0da1b',
              ref: { tile: { x: -11, y: 6 } }
            },
            {
              id: 'a2c1583d-667e-481c-9ddc-e1fd13a39203',
              ref: { tile: { x: -5, y: 6 } }
            },
            {
              id: 'bc60ae76-c0f1-4c7f-8ec1-acdec06a9250',
              ref: { item: '47a89a93-8f6a-4d8d-a559-e8cd332bc50a' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '7180a187-4254-46af-806f-4184250d9609',
          color: 'color1',
          anchors: [
            {
              id: 'cb98ae3b-f88d-45ab-9dd8-0ced127e0ee1',
              ref: { item: '47a89a93-8f6a-4d8d-a559-e8cd332bc50a' }
            },
            {
              id: '8a9f4c57-0685-4624-bf30-f5b27f34662a',
              ref: { item: '40465f9b-6bec-4d83-8a6f-359921793339' }
            }
          ]
        },
        {
          id: '2bbf530c-5b0a-4405-a6ef-9df4784ba49b',
          color: 'color1',
          anchors: [
            {
              id: '4072b959-8f00-4cef-9888-98b6faa5671b',
              ref: { item: '0108c5a7-4165-4b45-b289-5cb5a0e713d5' }
            },
            {
              id: '020bc704-e25f-4a3a-a613-6fb7ce800f7e',
              ref: { tile: { x: -11, y: -6 } }
            },
            {
              id: '6febf444-92b1-42ac-b6f3-afd71c3ee452',
              ref: { tile: { x: -5, y: -6 } }
            },
            {
              id: '237f901a-d01d-4d9b-8bd1-eb11efedaa1b',
              ref: { item: 'fa902e5c-9026-44db-ab0c-e06bf9845987' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '1074fc66-d2ff-49ed-85d3-87a0ded7f54b',
          color: 'color1',
          anchors: [
            {
              id: 'b2db4f0d-59e7-4715-9d28-ea43887ae8c8',
              ref: { item: '00bdc689-a59b-4a5f-aeb4-c77c0bbaf038' }
            },
            {
              id: 'e742a2df-8911-40d8-9227-3d5f391f3beb',
              ref: { tile: { x: -8, y: -6 } }
            },
            {
              id: 'e1ddafc5-0f79-41af-a9f6-e8f9007accb6',
              ref: { tile: { x: -5, y: -6 } }
            },
            {
              id: '03cb17bd-34cb-4c80-989d-f299aa1a2915',
              ref: { item: 'fa902e5c-9026-44db-ab0c-e06bf9845987' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '120566e0-c0df-4d85-81b3-d6b224484668',
          color: 'color1',
          anchors: [
            {
              id: '433e4f1f-0bf9-44f5-ab9f-d98861206b59',
              ref: { item: '62734811-2083-4ec1-b06b-8ce261acc373' }
            },
            {
              id: '1affa818-d601-4ab3-b507-d71ece11920c',
              ref: { item: 'fa902e5c-9026-44db-ab0c-e06bf9845987' }
            }
          ]
        },
        {
          id: '2185c84e-5277-40f1-82b9-774dd9f64e2a',
          color: 'color1',
          anchors: [
            {
              id: 'aa663458-6df7-4bb2-946b-c8cc6ab29957',
              ref: { item: 'fa902e5c-9026-44db-ab0c-e06bf9845987' }
            },
            {
              id: '77530d07-6183-420c-affe-91a99b685db0',
              ref: { item: '40465f9b-6bec-4d83-8a6f-359921793339' }
            }
          ]
        },
        {
          id: '2e025225-169c-4609-bf93-a4a7aa602b00',
          color: 'color1',
          anchors: [
            {
              id: '5870d75a-066c-422e-a517-c44417961809',
              ref: { item: '40465f9b-6bec-4d83-8a6f-359921793339' }
            },
            {
              id: '0fdeeb60-9820-41dc-a73b-96196e035331',
              ref: { item: '2dd7d72b-89f3-4d7e-b9ea-a81c80ba1d88' }
            }
          ]
        }
      ],
      rectangles: [
        {
          id: '75637566-6d10-49fb-b3ec-85584250475d',
          color: 'color6',
          from: { x: 1, y: -10 },
          to: { x: 6, y: -12 }
        },
        {
          id: '35cbdf0d-daa1-4939-9901-dd9aee36903f',
          color: 'color2',
          from: { x: 15, y: 4 },
          to: { x: 17, y: -4 }
        },
        {
          id: 'ae50ce7d-7b3e-49ec-8fe0-e2e09c4f2dfa',
          color: 'color7',
          from: { x: 0, y: 13 },
          to: { x: 8, y: 11 }
        },
        {
          id: 'e35ec239-f1eb-4e83-9112-d3b6b3f01f2c',
          color: 'color1',
          from: { x: -4, y: 9 },
          to: { x: -12, y: 6 }
        },
        {
          id: '27bea545-8505-4ebe-ae72-01de85833465',
          color: 'color1',
          from: { x: -4, y: -6 },
          to: { x: -12, y: -10 }
        },
        {
          id: '0a74d0a7-b987-480f-ada1-f5a575eae0b9',
          color: 'color5',
          from: { x: 3, y: 1 },
          to: { x: 5, y: -1 }
        }
      ],
      textBoxes: [
        {
          orientation: 'Y',
          fontSize: 0.6,
          content: 'Airside operations',
          id: 'f19b5d77-733e-48be-93a0-a0b0cae276d4',
          tile: { x: 14, y: -1 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: 'Information management',
          id: 'a15c0d88-1682-4fc8-9678-62e029df4574',
          tile: { x: 0, y: 10 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: 'Terminal management',
          id: 'e8ae777d-2c29-4c8e-8f61-0c63fac32d11',
          tile: { x: -12, y: 5 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: 'Passenger facilitation',
          id: '82132c7f-704e-49f1-86e7-e4f072e56779',
          tile: { x: -12, y: -11 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: 'AODB',
          id: '52070439-245d-45ab-974a-615427c1c3d1',
          tile: { x: 2, y: -2 }
        }
      ]
    }
  ]
};
