import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private packageCode = `{
        "name": "clarity-demo",
        "version": "0.0.0",
        "license": "MIT",
        "angular-cli": {},
        "scripts": {
          "start": "ng serve",
          "lint": "tslint \"src/**/*.ts\"",
          "test": "ng test",
          "pree2e": "webdriver-manager update",
          "e2e": "protractor"
        },
        "private": true,
        "dependencies": {
          "@angular/common": "~2.1.0",
          "@angular/compiler": "~2.1.0",
          "@angular/core": "~2.1.0",
          "@angular/forms": "~2.1.0",
          "@angular/http": "~2.1.0",
          "@angular/platform-browser": "~2.1.0",
          "@angular/platform-browser-dynamic": "~2.1.0",
          "@angular/router": "~3.1.0",
          "@webcomponents/custom-elements": "github:webcomponents/custom-elements#v1.0.0-alpha.3",
          "clarity-angular": "^0.7.0",
          "clarity-icons": "^0.7.0",
          "clarity-ui": "^0.7.0",
          "core-js": "^2.4.1",
          "font-awesome": "^4.7.0",
          "mutationobserver-shim": "^0.3.2",
          "prismjs": "^1.5.1",
          "rxjs": "5.0.0-beta.12",
          "ts-helpers": "^1.1.1",
          "zone.js": "^0.6.23"
        },
        "devDependencies": {
          "@types/jasmine": "^2.2.30",
          "@types/node": "^6.0.42",
          "angular-cli": "1.0.0-beta.19-3",
          "codelyzer": "1.0.0-beta.1",
          "jasmine-core": "2.4.1",
          "jasmine-spec-reporter": "2.5.0",
          "karma": "1.2.0",
          "karma-chrome-launcher": "^2.0.0",
          "karma-cli": "^1.0.1",
          "karma-jasmine": "^1.0.2",
          "karma-remap-istanbul": "^0.2.1",
          "protractor": "4.0.9",
          "ts-node": "1.2.1",
          "tslint": "3.13.0",
          "typescript": "~2.0.3",
          "webdriver-manager": "10.2.5"
        }
      }`;

      private angularCode = `{
        "project": {
          "version": "1.0.0-beta.19-3",
          "name": "clarity-demo"
        },
        "apps": [
          {
            "root": "src",
            "outDir": "dist",
            "assets": [
              "assets",
              "favicon.ico"
            ],
            "index": "index.html",
            "main": "main.ts",
            "test": "test.ts",
            "tsconfig": "tsconfig.json",
            "prefix": "app",
            "mobile": false,
            "styles": [
              "../node_modules/clarity-icons/clarity-icons.min.css",
              "../node_modules//font-awesome/css/font-awesome.min.css",
              "../node_modules/clarity-ui/clarity-ui.min.css",
              "../node_modules/prismjs/themes/prism-solarizedlight.css",
              "styles.css"
            ],
            "scripts": [
              "../node_modules/mutationobserver-shim/dist/mutationobserver.min.js",
              "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
              "../node_modules/clarity-icons/clarity-icons.min.js",
              "../node_modules/prismjs/prism.js",
              "../node_modules/prismjs/components/prism-typescript.min.js"
            ],
            "environments": {
              "source": "environments/environment.ts",
              "dev": "environments/environment.ts",
              "prod": "environments/environment.prod.ts"
            }
          }
        ],
        "addons": [],
        "packages": [],
        "e2e": {
          "protractor": {
            "config": "./protractor.conf.js"
          }
        },
        "test": {
          "karma": {
            "config": "./karma.conf.js"
          }
        },
        "defaults": {
          "styleExt": "css",
          "prefixInterfaces": false,
          "inline": {
            "style": false,
            "template": false
          },
          "spec": {
            "class": false,
            "component": true,
            "directive": true,
            "module": false,
            "pipe": true,
            "service": true
          }
        }
      }`;

  ngOnInit() {
  }

}
