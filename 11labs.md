## 11labs: World's first 11labs Synthetic dataset
Introducing 11 Labs, world's first high-quality synthetic dataset made through 11 labs API. In this dataset, we wanted to provide a high-quality audio speech dataset that people can use for academic and research purpose in Europe and highly regulated market without fearing copyright or intellectual property violation. 

#### What prompted for this project?
It comes under Sleeping AI and friendly labs, commitment to reinvent audio domain by flooding with specialised and high-quality datasets that fuels academic and open-source research landscape. 

LICENSE is a big concern and prevents from using many high-quality dataset. Through this project, we want to explore what can be achieved in current LICENSE landscape, find its loopholes and change of terms accordance to country in question. 

Thus, we wanted to make an elite project releasing these datasets. 

#### Dataset Info
1. We have provided 55 HOURS of audio
2. Each audio snippet is 8-12 seconds long 
3. We provide both raw version and superRES version that was achieved by resemble-enhance. 
4. Enhanced version that we recommend are located-as rename-out and divided into sub-parts. Please re-construct them in below way:
```Bash
https://huggingface.co/datasets/sleeping-ai/11Labs/blob/main/rname-output.tar.gz.part-aa
https://huggingface.co/datasets/sleeping-ai/11Labs/blob/main/rname-output.tar.gz.part-ab
https://huggingface.co/datasets/sleeping-ai/11Labs/blob/main/rname-output.tar.gz.part-ac

### After having these files, please use below command
cat rname-output.tar.gz.part-* > rname-output.tar.gz
```
5. Meta-data have been provided in this file: https://huggingface.co/datasets/sleeping-ai/11Labs/blob/main/rname.csv
6. We have also provided raw Meta-data files in JSON: https://huggingface.co/datasets/sleeping-ai/11Labs/blob/main/meta-rname.zip
7. Original raw files: https://huggingface.co/datasets/sleeping-ai/11Labs/blob/main/rname.zip

#### LICENSE
Sleeping AI and friendly labs who were part of this project own all rights to this dataset. We provide academic and research access to everyone. 

#### Community note
Re-packaging our dataset without giving us proper credit is a copyright and ethical violation. 

**Dataset can be found:** https://huggingface.co/datasets/sleeping-ai/11Labs
