# Demo html app 

use raw github url of run.sh in marathon url 

eg.
{
  "id": "web",
  "cmd": "chmod +x run.sh && ./run.sh && cd testmarathonapp/app && python -m SimpleHTTPServer $PORT",
  "mem": 50,
  "cpus": 0.1,
  "instances": 1,
  "constraints": [ ["hostname", "UNIQUE"] ],
 "servicePorts": [8032],
"uris": ["https://raw.githubusercontent.com/samek/testmarathonapp/master/run.sh"]
}
