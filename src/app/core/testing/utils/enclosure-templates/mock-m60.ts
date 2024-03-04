import { MockEnclosure } from './mock-enclosure-template';

export class MockM60 extends MockEnclosure {
  readonly totalSlotsFront: number = 24;
  readonly totalSlotsRear: number = 0;
  readonly totalSlotsInternal: number = 0;
  /*
  data = {
    id: '5b0bd6d1a309b73f',
    name: 'iX 4024Ss e001',
    model: 'M Series',
    controller: true,
    elements: [
      {
        name: 'Array Device Slot',
        descriptor: '',
        header: [
          'Descriptor',
          'Status',
          'Value',
          'Device',
        ],
        elements: [],
        has_slot_status: true,
      },
      {
        name: 'Enclosure',
        descriptor: '',
        header: [
          'Descriptor',
          'Status',
          'Value',
        ],
        elements: [
          {
            slot: 1,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: 'None',
            },
            name: 'Enclosure',
            descriptor: '',
            status: 'OK',
            value: 'None',
            value_raw: '0x11000000',
          },
          {
            slot: 2,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: 'None',
            },
            name: 'Enclosure',
            descriptor: '',
            status: 'OK',
            value: 'None',
            value_raw: '0x1000000',
          },
        ],
        has_slot_status: false,
      },
      {
        name: 'SAS Expander',
        descriptor: '',
        header: [
          'Descriptor',
          'Status',
          'Value',
        ],
        elements: [
          {
            slot: 1,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: 'None',
            },
            name: 'SAS Expander',
            descriptor: '',
            status: 'OK',
            value: 'None',
            value_raw: '0x1000000',
          },
        ],
        has_slot_status: false,
      },
      {
        name: 'Temperature Sensor',
        descriptor: '',
        header: [
          'Descriptor',
          'Status',
          'Value',
        ],
        elements: [
          {
            slot: 1,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: '40C',
            },
            name: 'Temperature Sensor',
            descriptor: '',
            status: 'OK',
            value: '40C',
            value_raw: '0x1003c00',
          },
          {
            slot: 2,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: '35C',
            },
            name: 'Temperature Sensor',
            descriptor: '',
            status: 'OK',
            value: '35C',
            value_raw: '0x1003700',
          },
          {
            slot: 3,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: '23C',
            },
            name: 'Temperature Sensor',
            descriptor: '',
            status: 'OK',
            value: '23C',
            value_raw: '0x1002b00',
          },
          {
            slot: 4,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: '22C',
            },
            name: 'Temperature Sensor',
            descriptor: '',
            status: 'OK',
            value: '22C',
            value_raw: '0x1002a00',
          },
        ],
        has_slot_status: false,
      },
      {
        name: 'Voltage Sensor',
        descriptor: '',
        header: [
          'Descriptor',
          'Status',
          'Value',
        ],
        elements: [
          {
            slot: 1,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: '5.06V',
            },
            name: 'Voltage Sensor',
            descriptor: '',
            status: 'OK',
            value: '5.06V',
            value_raw: '0x10001fa',
          },
          {
            slot: 2,
            data: {
              Descriptor: '',
              Status: 'OK',
              Value: '12.25V',
            },
            name: 'Voltage Sensor',
            descriptor: '',
            status: 'OK',
            value: '12.25V',
            value_raw: '0x10004c9',
          },
        ],
        has_slot_status: false,
      },
    ],
    number: 0,
    label: 'iX 4024Ss e001',
  } as Enclosure;
*/

  // data = {
  //   name: 'iX 4024Sp e001',
  //   model: 'M60',
  //   controller: true,
  //   dmi: 'TRUENAS-M60-HA',
  //   status: [
  //     'OK',
  //   ],
  //   id: '5b0bd6d1a309b57f',
  //   vendor: 'iX',
  //   product: '4024Sp',
  //   revision: 'e001',
  //   bsg: '/dev/bsg/17:0:19:0',
  //   sg: '/dev/sg433',
  //   pci: '17:0:19:0',
  //   elements: {
  //     'Array Device Slot': {
  //       1: {
  //         descriptor: 'slot00',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadi',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot1',
  //           slot: 1,
  //         },
  //       },
  //       2: {
  //         descriptor: 'slot01',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadk',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot2',
  //           slot: 2,
  //         },
  //       },
  //       3: {
  //         descriptor: 'slot02',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadm',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot3',
  //           slot: 3,
  //         },
  //       },
  //       4: {
  //         descriptor: 'slot03',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadp',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot4',
  //           slot: 4,
  //         },
  //       },
  //       5: {
  //         descriptor: 'slot04',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadq',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot5',
  //           slot: 5,
  //         },
  //       },
  //       6: {
  //         descriptor: 'slot05',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadr',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot6',
  //           slot: 6,
  //         },
  //       },
  //       7: {
  //         descriptor: 'slot06',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadt',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot7',
  //           slot: 7,
  //         },
  //       },
  //       8: {
  //         descriptor: 'slot07',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadu',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot8',
  //           slot: 8,
  //         },
  //       },
  //       9: {
  //         descriptor: 'slot08',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadx',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot9',
  //           slot: 9,
  //         },
  //       },
  //       10: {
  //         descriptor: 'slot09',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdadz',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot10',
  //           slot: 10,
  //         },
  //       },
  //       11: {
  //         descriptor: 'slot10',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaea',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot11',
  //           slot: 11,
  //         },
  //       },
  //       12: {
  //         descriptor: 'slot11',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaeb',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot12',
  //           slot: 12,
  //         },
  //       },
  //       13: {
  //         descriptor: 'slot12',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaed',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot13',
  //           slot: 13,
  //         },
  //       },
  //       14: {
  //         descriptor: 'slot13',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaef',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot14',
  //           slot: 14,
  //         },
  //       },
  //       15: {
  //         descriptor: 'slot14',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaei',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot15',
  //           slot: 15,
  //         },
  //       },
  //       16: {
  //         descriptor: 'slot15',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaej',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot16',
  //           slot: 16,
  //         },
  //       },
  //       17: {
  //         descriptor: 'slot16',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaek',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot17',
  //           slot: 17,
  //         },
  //       },
  //       18: {
  //         descriptor: 'slot17',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaem',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot18',
  //           slot: 18,
  //         },
  //       },
  //       19: {
  //         descriptor: 'slot18',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'sdaeq',
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot19',
  //           slot: 19,
  //         },
  //       },
  //       20: {
  //         descriptor: 'slot19',
  //         status: 'Not installed',
  //         value: null,
  //         value_raw: 83886080,
  //         dev: null,
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot20',
  //           slot: 20,
  //         },
  //       },
  //       21: {
  //         descriptor: 'slot20',
  //         status: 'Not installed',
  //         value: null,
  //         value_raw: 83886080,
  //         dev: null,
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot21',
  //           slot: 21,
  //         },
  //       },
  //       22: {
  //         descriptor: 'slot21',
  //         status: 'Not installed',
  //         value: null,
  //         value_raw: 83886080,
  //         dev: null,
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot22',
  //           slot: 22,
  //         },
  //       },
  //       23: {
  //         descriptor: 'slot22',
  //         status: 'Not installed',
  //         value: null,
  //         value_raw: 83886080,
  //         dev: null,
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot23',
  //           slot: 23,
  //         },
  //       },
  //       24: {
  //         descriptor: 'slot23',
  //         status: 'Not installed',
  //         value: null,
  //         value_raw: 83886080,
  //         dev: null,
  //         original: {
  //           enclosure_id: '5b0bd6d1a309b57f',
  //           enclosure_sg: '/dev/sg433',
  //           enclosure_bsg: '/dev/bsg/17:0:19:0',
  //           descriptor: 'slot24',
  //           slot: 24,
  //         },
  //       },
  //       25: {
  //         descriptor: 'Disk #1',
  //         status: 'Not installed',
  //         value: null,
  //         value_raw: 83886080,
  //         dev: null,
  //         original: {
  //           enclosure_id: 'm60_nvme_enclosure',
  //           enclosure_sg: null,
  //           enclosure_bsg: null,
  //           descriptor: 'slot1',
  //           slot: 1,
  //         },
  //       },
  //       26: {
  //         descriptor: 'Disk #2',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'nvme1n1',
  //         original: {
  //           enclosure_id: 'm60_nvme_enclosure',
  //           enclosure_sg: null,
  //           enclosure_bsg: null,
  //           descriptor: 'slot2',
  //           slot: 2,
  //         },
  //       },
  //       27: {
  //         descriptor: 'Disk #3',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'nvme2n1',
  //         original: {
  //           enclosure_id: 'm60_nvme_enclosure',
  //           enclosure_sg: null,
  //           enclosure_bsg: null,
  //           descriptor: 'slot3',
  //           slot: 3,
  //         },
  //       },
  //       28: {
  //         descriptor: 'Disk #4',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //         dev: 'nvme3n1',
  //         original: {
  //           enclosure_id: 'm60_nvme_enclosure',
  //           enclosure_sg: null,
  //           enclosure_bsg: null,
  //           descriptor: 'slot4',
  //           slot: 4,
  //         },
  //       },
  //     },
  //     'SAS Expander': {
  //       26: {
  //         descriptor: 'SAS3 Expander',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //       },
  //     },
  //     Enclosure: {
  //       28: {
  //         descriptor: 'Encl-BpP',
  //         status: 'OK, Swapped',
  //         value: null,
  //         value_raw: 285212672,
  //       },
  //       29: {
  //         descriptor: 'Encl-PeerS',
  //         status: 'OK',
  //         value: null,
  //         value_raw: 16777216,
  //       },
  //     },
  //     'Temperature Sensors': {
  //       31: {
  //         descriptor: 'ExpP-Die',
  //         status: 'OK',
  //         value: '37C',
  //         value_raw: 16791808,
  //       },
  //       32: {
  //         descriptor: 'ExpS-Die',
  //         status: 'OK',
  //         value: '37C',
  //         value_raw: 16791808,
  //       },
  //       33: {
  //         descriptor: 'Sense BP1',
  //         status: 'OK',
  //         value: '21C',
  //         value_raw: 16787712,
  //       },
  //       34: {
  //         descriptor: 'Sense BP2',
  //         status: 'OK',
  //         value: '22C',
  //         value_raw: 16787968,
  //       },
  //     },
  //     'Voltage Sensor': {
  //       36: {
  //         descriptor: '5V Sensor',
  //         status: 'OK',
  //         value: '5.13V',
  //         value_raw: 16777729,
  //       },
  //       37: {
  //         descriptor: '12V Sensor',
  //         status: 'OK',
  //         value: '12.45V',
  //         value_raw: 16778461,
  //       },
  //     },
  //   },
  //   label: 'iX 4024Sp e001',
  // } as Enclosure;

  constructor(number: number) {
    super(number);
    this.enclosureNumber = number;
    this.enclosureInit();
  }
}

/*
  {
    "id": "m60_nvme_enclosure",
    "dmi": "m60_nvme_enclosure",
    "model": "M60",
    "sg": null,
    "bsg": null,
    "name": "M60 NVMe Enclosure",
    "controller": true,
    "status": [
      "OK"
    ],
    "elements": {},
    "label": "M60 NVMe Enclosure"
  }
*/
