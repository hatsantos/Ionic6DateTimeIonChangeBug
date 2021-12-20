import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as dayjs from 'dayjs';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

	public Options: string[] = ["Option 1", "Option 2", "Option 3"];

	public SelectedDate: string;

	public SelectedOption: string;

	constructor(private activatedRoute: ActivatedRoute, private LoadingController: LoadingController) { }

	ngOnInit() 
	{

	}

	OnChangeOption(e) 
	{
		console.log("OnChangeOption: ", e.detail.value);
	}

	OnChangeDate(e) 
	{
		console.log("OnChangeDate: ", e.detail.value);

		if (this.SelectedDate) this.simulateAsyncRequest();
	}

	async simulateAsyncRequest() 
	{
		console.log("loading");

		const loading = await this.LoadingController.create();

		await loading.present();

		setTimeout(async () => { await loading.dismiss(); }, 2000)

		return loading;
	}
}
