import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppLanguages } from 'src/app/core/enums/AppLanguages';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { GlobalKeys } from 'src/app/core/enums/GlobalKeys';
/**
 * This service will running after initialized the app.
 * We are using this service for getting required data for starting the application.
 */

@Injectable({
	providedIn: 'root'
})
export class InitializerService {

	LANG: string = AppLanguages.ARABIC;

	constructor(
 		private cookie: CookieService,
		private translate: TranslateService,
		@Inject(DOCUMENT) private document: Document
	) { }

	init() {
		this.LANG = this.getLang();

		const listOfRequiredFunctions = [
			this.loadStylesByLanguage(),
			this.setTranslationLang(),
		];
		return Promise.all(listOfRequiredFunctions).then(() => {
			Promise.resolve();
		});
	}

	private getLang(): string {
		return (this.cookie.get(GlobalKeys.USER_LANG) === AppLanguages.ARABIC) ?
			AppLanguages.ARABIC : AppLanguages.ENGLISH;
	}

	private getStyles(): Styles {
		const bootstrapLtr = 'assets/styles/bootstrap.min.css';
		const bootstrapRtl = 'assets/styles/bootstrap-rtl.min.css';
		const masterLtr = 'assets/styles/master.css';
		const masterRtl = 'assets/styles/master-rtl.css';

		return {
			boostrap: (this.LANG === AppLanguages.ARABIC) ? bootstrapRtl : bootstrapLtr,
			master: (this.LANG === AppLanguages.ARABIC) ? masterRtl : masterLtr
		}
	}


	private loadStylesByLanguage() {
		const stylesheet:string = 'stylesheet';
		const styles: Styles = this.getStyles();
		const head = this.document.getElementsByTagName('head')[0];
		const bootstrapStyleEl: HTMLLinkElement = this.document.createElement('link');
		const masterStyleEl: HTMLLinkElement = this.document.createElement('link');
		
		bootstrapStyleEl.href = styles.boostrap;
		bootstrapStyleEl.rel = stylesheet;

		masterStyleEl.rel = stylesheet;
		masterStyleEl.href = styles.master;
		
		head.appendChild(masterStyleEl);
		head.appendChild(bootstrapStyleEl)
		this.updateHtmlAttr();

		return Promise.resolve();
	}

	private updateHtmlAttr() {
		const DIR = this.LANG === AppLanguages.ARABIC ? 'rtl' : 'ltr';
		// update html attributes
		document.querySelector('html').setAttribute('dir', DIR);
		document.querySelector('html').setAttribute('lang', this.LANG);
	}

	private setTranslationLang() {
		this.translate.setDefaultLang(AppLanguages.ENGLISH);

		const userLang = this.cookie.get(GlobalKeys.USER_LANG);
		if (userLang) {
			this.translate.use(userLang);
		} else {
			this.cookie.set(GlobalKeys.USER_LANG, AppLanguages.ENGLISH);
			this.translate.use(AppLanguages.ENGLISH);
		}

		return Promise.resolve();
	}
}


type Styles = {
	boostrap: string,
	master: string
}