let json = {
	"global": {
		"splitterSize": 8,
		"tabEnableFloat": true
	},
	"borders": [],
	"layout": {
		"type": "row",
		"id": "#5a88c4ad-3a30-4d40-9c07-e4df728f46bc",
		"children": [
			{
				"type": "tabset",
				"id": "#d50f3bb1-539c-407a-acc1-6b2caeda3d0f",
				"weight": 18.564176939811457,
				"name": "Navigation",
				"enableDrop": false,
				"enableDrag": false,
				"enableDivide": false,
				"enableClose": false,
				"enableTabStrip": false,
				"children": [
					{
						"type": "tab",
						"id": "#fbc947d5-d937-47dc-8678-0036ad5f86c7",
						"name": "Options",
						"component": "text",
						"config": {
							"text": "A named tabset with:<br>enableTabStrip:false<br>enableClose:false<br>enableDivide:false<br><br>Blotter tabset has:<br>name: Blotters,<br>enableDrop: false,<br>enableDrag: false,<br>enableClose: false,<br>enableDivide: false,"
						},
						"enableDrag": false
					}
				]
			},
			{
				"type": "row",
				"id": "#126b9d3e-9220-40fc-a10c-8a28ac5cde81",
				"weight": 81.43582306018854,
				"children": [
					{
						"type": "row",
						"id": "#052accd0-5358-4640-8e95-049612c28fd4",
						"weight": 74.36260623229462,
						"children": [
							{
								"type": "tabset",
								"id": "#c22a384a-ab33-48bd-bc28-1333b05b660f",
								"weight": 50,
								"children": [
									{
										"type": "tab",
										"id": "#af4e9fa3-606f-4764-93eb-adb4f01d970e",
										"name": "FI",
										"component": "grid",
										"config": {
											"id": "2"
										}
									}
								]
							},
							{
								"type": "row",
								"id": "#3caa9b72-4167-4e48-ada8-f44e510e3ee0",
								"weight": 50,
								"children": [
									{
										"type": "tabset",
										"id": "#2ab2a6b4-166f-4307-93d2-95406ef6d5f2",
										"weight": 50,
										"children": [
											{
												"type": "tab",
												"id": "#76cf8fb4-cd66-4733-ae9c-132261cb8610",
												"name": "Metals",
												"component": "grid",
												"config": {}
											}
										]
									},
									{
										"type": "tabset",
										"id": "#cc4bf8b3-b24c-4920-9030-787d653a7b99",
										"weight": 50,
										"children": [
											{
												"type": "tab",
												"id": "#77b624c6-09d1-4831-a148-2db35c8a3321",
												"component": "multitype"
											}
										]
									}
								]
							}
						]
					},
					{
						"type": "tabset",
						"id": "#faa898ff-3cfa-4e6e-99d9-8b256a64731b",
						"weight": 25.637393767705383,
						"name": "Blotters",
						"enableDeleteWhenEmpty": false,
						"enableDrop": false,
						"enableDrag": false,
						"enableDivide": false,
						"enableClose": false,
						"children": [
							{
								"type": "tab",
								"id": "#da864b7c-7688-4e27-b4c3-c29123c2ed54",
								"name": "Activity",
								"component": "grid",
								"config": {},
								"enableDrag": false,
								"icon": "images/folder.svg"
							},
							{
								"type": "tab",
								"id": "#209268f6-f099-45ca-9055-696620f45806",
								"name": "Execution",
								"component": "grid",
								"config": {
									"id": "1"
								},
								"enableDrag": false,
								"icon": "images/folder.svg"
							},
							{
								"type": "tab",
								"id": "#fd839a0b-0bb2-496c-bd86-4afb29d893ba",
								"name": "Orders",
								"component": "grid",
								"config": {},
								"enableDrag": false,
								"icon": "images/folder.svg"
							},
							{
								"type": "tab",
								"id": "#76db0867-a908-4576-9609-83c6ce5ec4dc",
								"name": "Historic",
								"component": "grid",
								"config": {},
								"enableDrag": false,
								"icon": "images/folder.svg"
							}
						],
						"active": true
					}
				]
			}
		]
	}
}