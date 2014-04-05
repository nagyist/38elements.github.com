---
layout: posts
title: Djangoメモ 
---
DjangoのModelをスクリプトでコマンドラインから利用する。 
  
<br/>
例
{% highlight python  %}
import sys, os
sys.path.append("/path/to/yourproject")
os.environ['DJANGO_SETTINGS_MODULE'] = "yourproject.settings"
from yourproject.models.foo import FooModel
FooModel.objects.all()
{% endhighlight %}
[参考](https://stackoverflow.com/questions/383073/django-how-can-i-use-my-model-classes-to-interact-with-my-database-from-outside/383089#383089)   
<br/>

テーブル定義を表示   
django manage.py sql appname  
インデックスを表示  
python manage.py sqlindexes appname   
<br/>
  
データベースのデータをjson形式で整形して出力する     
python manage.py dumpdata foo --indent 4 &gt; foo.json  
[dumpdata &lt;appname appname appname.Model ...&gt;](https://docs.djangoproject.com/en/1.6/ref/django-admin/#dumpdata-appname-appname-appname-model)  
<br/>
  
pythonで長い文字列を作成する  
{% highlight python  %}
a = "111111111111111" \  
    "222222222222222" \  
    "333333333333333"   
{% endhighlight %}  
<br/>
    
pythonでは値の最後に,があるとjsonのパースでエラーになる。
<br/>
   
SimpleHTTPServerで何も出力しない。
{% highlight bach  %}
python -m SimpleHTTPServer > /dev/null 2>&1
{% endhighlight %}  