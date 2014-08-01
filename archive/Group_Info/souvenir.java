/*****************************************************************************************
*
*     Souvenir v1.01
*
*     (c) Toh Lik Khoong, NavSurf.com 2000 dedicated to R.W.H
*     The latest version of the applet may be found at http://navsurf.com
*     This source code may not be reproduced without the express permission of the author.
*
******************************************************************************************/

/******************************************************************************************
*
*     Sample applet for Searchlight
*     <applet code=souvenir.class width=300 height=200>
*     <param name=filename value="example.txt">
*     <param name=bgcolor value="FFFFFF">
*     <param name=target value="_blank">
*     <param name=increment value="15">
*     <param name=delay value="100">
*     </applet>
*
*******************************************************************************************/

import java.applet.Applet;
import java.awt.image.MemoryImageSource;
import java.awt.image.PixelGrabber;
import java.awt.*;
import java.awt.event.*;
import java.util.*;
import java.net.*;
import java.io.*;

public class souvenir extends Applet implements Runnable{
	private MediaTracker tracker = new MediaTracker(this);
	private Image orimage = null;
	private Image dbimage;
	private Graphics dbgraphics;
	private Thread thread = null;
	private Color bgcolor = new Color(255, 255, 255);
	
	private Vector images = new Vector();
	private Vector urls = new Vector();
	
	private int[] pixels;
	private int[] buffer;
	
	private String target = "_blank";

	private int current_index = 0;
	private int delay = 100;
	private static int incr = 10;

	public void init(){
		String param;
		// retrieval of parameters
		param = getParameter("delay");
		if (param != null) delay = Integer.parseInt(param);
		if (delay < 10) delay = 10;
		param = getParameter("bgcolor");
		if (param != null) bgcolor = new Color(Integer.parseInt(param,16));
		param = getParameter("target");
		if (param != null) target = param;
		param = getParameter("increment");
		if (param != null) incr = Integer.parseInt(param);
		if (incr > 255) incr = 255;

		// define arrays
		pixels = new int[size().width * size().height];
		buffer = new int[size().width * size().height];
		
		setBackground(bgcolor);
		
		readFile();

		// double buffering
		dbimage = createImage(size().width, size().height);
		dbgraphics = dbimage.getGraphics();
	}
	
	
	// wait while loading an image
	private void waitForImage(int id){
		while (!tracker.checkID(id, true)){
			try{
				Thread.sleep(20);
			}catch(InterruptedException e){}
		}
	}

	public boolean mouseUp(Event e, int x, int y){
		URL url = (URL) urls.elementAt(current_index);
		if (url != null){
			getAppletContext().showDocument(url, target);
		}
		return true;
	}

	private void createEffect(int width, int height, int transparency){
		int point;
		int a, r, g, b;
		for (int y = 0; y < height; y++){
			for (int x = 0; x < width; x++){
				int index = y * width + x;
				point = pixels[index];
				a = (point & 0xff000000) >> 24;
				r = ((int) (((point & 0x00ff0000) >> 16) * transparency) + bgcolor.getRed() * (255 - transparency))/255;
				g = ((int) (((point & 0x0000ff00) >> 8) * transparency) + bgcolor.getGreen() * (255 - transparency))/255;
				b = ((int) ((point & 0x0000ff) * transparency) + bgcolor.getBlue() * (255 - transparency))/255;
				buffer[index] = (a << 24) | (r << 16) | (g << 8) | b;
			}
    		}
	}

	public void paint(Graphics g){
		if (orimage != null){
			dbgraphics.drawImage(orimage, (size().width - orimage.getWidth(null))/2, (size().height - orimage.getHeight(null))/2, this);
		}
		if (dbimage != null) g.drawImage(dbimage, 0, 0, this);
	}

	public void update(Graphics g){
		paint(g);
	}
	
	public void start(){
		thread = new Thread(this);
		thread.start();
	}

	public void stop(){
		thread = null;
	}
	
	private boolean fade_out = false;

	public void run(){
		Thread.currentThread().setPriority(Thread.NORM_PRIORITY - 1);
		int transparency = 0;
		while(true){
			repaint();
			try{
				thread.sleep(delay);
			}catch (InterruptedException e){}

			waitForImage(current_index);
			Image current_image = (Image) images.elementAt(current_index);
			int w = current_image.getWidth(null) < size().width ? current_image.getWidth(null):size().width;
			int h = current_image.getHeight(null) < size().height ? current_image.getHeight(null):size().height;

			PixelGrabber pg = new PixelGrabber(current_image, 0, 0, w, h, pixels, 0, w);
        		try{
				pg.grabPixels();
        		}catch (InterruptedException e){}
        		createEffect(w, h, transparency);
			orimage = createImage(new MemoryImageSource(w, h, buffer, 0, w));
			if (fade_out) transparency -= incr;
			else transparency += incr;
			if (transparency > 255){
				if (current_index + 1 < images.size()) waitForImage(current_index + 1);
				try{
					Thread.sleep(2000);
				}catch (InterruptedException e){}
				transparency -= incr;
				fade_out = true;
			}
			if (transparency < 0){
				transparency += incr;
				fade_out = false;
				if (current_index + 1 < images.size()) current_index++;
				else current_index = 0;
			}
		}
	}

	private void readFile(){
		String filename = getParameter("filename");
		if (filename != null){
			try{
				URL url = new URL(getDocumentBase(), filename);
				String line;
				BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
				int i = 0;
				do{
					line = in.readLine();
					if (line != null){
						StringTokenizer st = new StringTokenizer(line, "|");
						if (st.hasMoreTokens()){
							Image image = getImage(getDocumentBase(), st.nextToken());
							images.addElement(image);
							tracker.addImage(image, i++);
							if (st.hasMoreTokens())
								urls.addElement(new URL(getDocumentBase(), st.nextToken()));
							else
								urls.addElement(null);
						}
					}
				}while (line != null);
			}catch (Exception e){}
		}
	}
}
