import {Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FrifoodPodatkiService} from "../../services/frifood-podatki.service";
import {User} from "../../classes/User";
import {Restaurant} from "../../classes/Restaurant";
import {Comment} from "../../classes/Comment";
import {Analytics} from "../../classes/Analytics";



@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.css']
})
export class CommentpageComponent implements OnInit {

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private frifoodPodatkiService: FrifoodPodatkiService, private router: Router) { }

  page;
  pageSize = 10;
  numberOfComments = 0;

  users: User[] = [];

  restavracija: Restaurant;

  komentarji: Comment[];

  restaurantPathID;

  public modalNewCommentShowing: boolean = false;

  loadNewPage(page: number)
  {

    let oldRoute:string = this.route.snapshot['_routerState'].url;
    let newRoute:string = oldRoute.substring(0, oldRoute.lastIndexOf('/')+1);

    this.router.navigate([newRoute.concat(page.toString())]);
  }

  public formaPodatkiKomentar: any;

  public dodajNovKomentar(data: any): void {

    //get form data from modal

    console.log(data);

    if (data.rating > 0 && data.newCommentText.length > 0) {
      this.frifoodPodatkiService.dodajKomentar(data).then(komentar => {

        console.log("Komentar shranjen", komentar);

        let novKomentar: Comment;

        if(this.komentarji.length < 10)
          this.komentarji.push(komentar);

        this.numberOfComments++;

      });
    }

  }

  ngOnInit() {

    /*let x: User[];
    x = this.inicializirajUporabnike();
    console.log("XXXXX->",x[0]._id);*/

    let analytics: Analytics;
    analytics = {
      _id: '',
      name: 'CommentPageViews',
      numAPICalls: 0,
    };
    this.frifoodPodatkiService.updateAnalyticsByName(analytics).then(r =>
      console.log(r)
    );

    this.frifoodPodatkiService.getUporabniki().then(
       (data) => {
        console.log(data[0]);

        data.forEach( x => {
          console.log(x.name);
        });

        this.users = data;
        console.log(this.users[0].name)
      }
    );

    const script = this.renderer.createElement('script');
    script.src = `./assets/javascripts/commentSuport.js`;
    this.renderer.appendChild(document.head, script);

    this.route.paramMap.subscribe(params => {
        this.restaurantPathID = params.get("id");
        this.page = params.get("page");

        this.frifoodPodatkiService.getRestaurantById(this.restaurantPathID).then(
          (data) => {
            console.log(data.timeTable);

            this.restavracija = data;
            console.log(this.restavracija.front)
          }
        );

        let komentarjiPerPage = {
          restaurantId: this.restaurantPathID,
          pageNumber: this.page-1
        };

        this.frifoodPodatkiService.getCommentsByRestaurantId(komentarjiPerPage).then(
          (data) => {
            this.komentarji = data[0] as Comment[];
            this.numberOfComments =  data[1];

            console.log("podatki komentarjev->",this.komentarji);

            this.komentarji.forEach( komentar => {

              this.frifoodPodatkiService.getUserById(komentar.author._id).then(
                (data) => {
                  komentar.name = data.name;
                  komentar.surname =  data.surname;

                  this.users.push(data);

                  console.log("user->",data);
                }
              );
            });
          }
        );
    });
  }


}
