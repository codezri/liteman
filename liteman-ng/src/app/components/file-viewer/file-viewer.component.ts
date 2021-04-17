import { Component, OnInit } from '@angular/core';

declare let Neutralino: any;
declare let NL_CWD: string;

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.less']
})
export class FileViewerComponent implements OnInit {

  public fileTree: any[] = [];
  public currentDir: string;
  public pathStack: string[];

  constructor() {
    this.pathStack = [];
  }

  ngOnInit(): void {
    this.setDirectory(NL_CWD);
  }

  async setDirectory(path: string) {
    this.currentDir = path;
    let response = await Neutralino.filesystem.readDirectory({
      path
    });
    this.fileTree = response.entries
                      .filter((item: any) => (item.entry != "." && item.entry != "..")) // remove . and ...
                      .sort((a: any, b: any) => (b.type.length - a.type.length)); // display directories first
  }

  goBack() {
    let lastPath: string = this.pathStack.pop();
    if(lastPath) {
      this.setDirectory(lastPath);
    }
  }

  handleItemClick(item: any) {
    if(item.type == "DIRECTORY") {
      this.pathStack.push(this.currentDir);
      this.setDirectory(this.currentDir + "/" + item.entry);
    }
    else {
      Neutralino.os.showMessageBox({
        type: "WARN",
        title: "Liteman",
        content: "Only directories are supported right now."
      });
    }
  }

}
