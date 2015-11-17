# P6_Make_Effective_Data_Visualization
Problem Set 6, Udacity' Data Analyst NAnodegree

Make Effective Data Visualization, Flights Dataset from RITA

By Mohammed Mahdi AKKOUH



Summary - in no more than 4 sentences, briefly introduce your data visualization and add any context that can help readers understand it
The dataset compiles data about US flights between years 1987 and 2008. This data comprises times and dates of flights, origin and destination airports, detailed delay times along with flight status.
Given the huge size of the original datasets, we’ll extract a subset of years 1987 and 2008, summarizing number of flights from an to an airport. Our aim will be to show how airport frequency has evolved between those two years, especially those with bigger changes. We’ll be using a slopegrah. All extraction and manipulation of the original dataset has been done using R, please refer to file extractor.Rmd.
Below is preview of the dataset:

![alt tag](https://raw.githubusercontent.com/lemahdi/P6_Make_Effective_Data_Visualization/master/img/dataset.png)

Airports attendance is defined as ratio to the total attendance.

Design - explain any design choices you made including changes to the visualization after collecting feedback
I chose the slopegraph as a graphic for my dataset. Given that I need to show the evolution of the airports attendance between 2 dates, a slopegraph is an elegant solution displaying all information without need of any supplemental text.

Feedback - include all feedback you received from others on your visualization from the first sketch to the final visualization
This is my first sketch: http://bl.ocks.org/lemahdi/raw/9a1c00845d2b56545312/
In the beginning, I displayed all the airports. Attendance ratio was displayed as percentage with 2 decimal points. However, given the density of the dataset (around 237 airports), many data overlapped. So I chose to limit my dataset to airports having an attendance bigger than 0.5%, either on year 1987 or 2008. Overlapping diminished but didn’t disappear. So I grouped airports with the same attendance on year 1987 together and removed their label from column 2008 which had the effect of removing completely the overlapping. Still, for airports having the same attendance, we couldn’t know which line to follow as we removed the airport label from column 2008. The solution was to group data in <g> elements and add a hover effect.
I ended up with this sketch which I submitted for feedback: 
http://bl.ocks.org/lemahdi/raw/6e3b8db524e1fb97c426/
My feedback post is here: https://discussions.udacity.com/t/feedback-for-final-project/38041
First feedback:
  - I tweaked javascript code in order to avoid overlapping of highlited text
  - I used a neutral color (brown) to highlight slopes while hovering
  - I changed the title as suggested
  - I added a pop up with portfolio name appearing when hevering the airport code
  - Improved story's text
  - http://bl.ocks.org/lemahdi/raw/c2c43f5f8b078c27ab29/
Second feedback:
  - I made the slope lines more thicker
  - I improved the text
  - http://bl.ocks.org/lemahdi/raw/0d4c9f42c467dadc52ed/

Resources - list any sources you consulted to create your visualization
http://bl.ocks.org/biovisualize/4348024
http://www.nytimes.com/interactive/2013/01/15/us/a-migration-of-unmarried-men.html?ref=us&_r=2&
http://skedasis.com/d3/slopegraph/
http://www.infragistics.com/community/blogs/tim_brock/archive/2015/06/03/an-introduction-to-slopegraphs-part-1.aspx
http://www.infragistics.com/community/blogs/tim_brock/archive/2015/06/08/an-introduction-to-slopegraphs-part-2.aspx
http://charliepark.org/a-slopegraph-update/
http://timelyportfolio.github.io/rCharts_dimple/slopegraph_example.html
http://dataremixed.com/2012/05/clarity-or-aesthetics-part-2-a-tale-of-four-quadrants/
https://ramnathv.github.io/pycon2014-r/visualize/ggplot2.html
http://vizwiz.blogspot.sg/2013/01/alberto-cairo-three-steps-to-become.html
http://www.storytellingwithdata.com/blog/2014/06/alternatives-to-pies
http://pubs.aeaweb.org/doi/pdfplus/10.1257/jep.28.1.209
http://charliepark.org/slopegraphs/#the_tablegraphic
http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR
http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0003nk
http://www.scholarpedia.org/article/Gestalt_principles
http://sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/
http://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
http://bost.ocks.org/mike/selection/#data
https://github.com/mbostock/d3/wiki/Selections#datum
http://charliepark.org/slopegraphs/
http://www.storytellingwithdata.com/blog/2014/03/more-on-slopegraphs
http://www.perceptualedge.com/articles/visual_business_intelligence/rules_for_using_color.pdf
